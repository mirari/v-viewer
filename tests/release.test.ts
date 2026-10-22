// @vitest-environment node
import { expect, it } from 'vitest'
import {
  mkdtempSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  cpSync,
  symlinkSync,
  rmSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve, join } from 'node:path'
import { execFileSync } from 'node:child_process'

it('CATV creates independent release commits and annotated tags without legacy history', () => {
  const directory = mkdtempSync(join(tmpdir(), 'v-viewer-release-'))
  const git = (...args: string[]) =>
    execFileSync('git', args, { cwd: directory, encoding: 'utf8' }).trim()
  const write = (file: string, value: unknown) =>
    writeFileSync(
      join(directory, file),
      typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n',
    )
  try {
    git('init')
    git('config', 'user.name', 'Release Test')
    git('config', 'user.email', 'test@example.invalid')
    write('package.json', {
      name: 'release-fixture',
      private: true,
      type: 'module',
      repository: {
        type: 'git',
        url: 'https://github.com/mirari/v-viewer.git',
      },
    })
    write('.gitignore', 'node_modules/\ndist/\nnotes.md\n')
    git('add', '.')
    git('commit', '-m', 'feat: legacy feature that must be excluded')
    const legacyHead = git('rev-parse', 'HEAD')
    git('tag', 'v3.0.14')
    mkdirSync(join(directory, 'packages/vue2'), { recursive: true })
    mkdirSync(join(directory, 'packages/vue3'), { recursive: true })
    write('packages/vue2/package.json', {
      name: '@v-viewer/vue2',
      version: '4.0.0',
      private: true,
    })
    write('packages/vue3/package.json', {
      name: '@v-viewer/vue3',
      version: '5.0.0',
      private: true,
    })
    write('release.config.json', { legacyHead })
    cpSync(resolve('scripts'), join(directory, 'scripts'), { recursive: true })
    symlinkSync(
      resolve('node_modules'),
      join(directory, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    )
    git('add', '.')
    git('commit', '-m', 'feat: unified viewer lifecycle')
    const release = (...args: string[]) =>
      execFileSync(process.execPath, ['scripts/release.mjs', ...args], {
        cwd: directory,
        encoding: 'utf8',
      })
    release('vue2', '--first-release')
    release('vue3', '--first-release')
    expect(git('cat-file', '-t', 'vue2-v4.0.0')).toBe('tag')
    expect(git('cat-file', '-t', 'vue3-v5.0.0')).toBe('tag')
    expect(git('log', '-1', '--format=%s')).toContain('chore(release): 5.0.0')
    for (const line of ['vue2', 'vue3']) {
      const changelog = readFileSync(
        join(directory, `packages/${line}/CHANGELOG.md`),
        'utf8',
      )
      expect(changelog).toContain('unified viewer lifecycle')
      expect(changelog).not.toContain('legacy feature')
    }
    write('fix.txt', 'fixed')
    git('add', '.')
    git('commit', '-m', 'fix: gallery cleanup')
    release('vue3', 'patch')
    expect(git('cat-file', '-t', 'vue3-v5.0.1')).toBe('tag')
    expect(
      JSON.parse(
        readFileSync(join(directory, 'packages/vue2/package.json'), 'utf8'),
      ).version,
    ).toBe('4.0.0')
    mkdirSync(join(directory, 'dist/vue3'), { recursive: true })
    write('dist/vue3/package.json', { version: '5.0.1' })
    execFileSync(
      process.execPath,
      ['scripts/release-notes.mjs', 'vue3-v5.0.1', 'notes.md'],
      { cwd: directory },
    )
    expect(readFileSync(join(directory, 'notes.md'), 'utf8')).toContain(
      'gallery cleanup',
    )
  } finally {
    if (!directory.startsWith(join(tmpdir(), 'v-viewer-release-')))
      throw new Error('Unsafe fixture path')
    rmSync(directory, { recursive: true, force: true })
  }
}, 30000)
