import catv from 'commit-and-tag-version'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { parseArgs } from 'node:util'

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    'first-release': { type: 'boolean' },
    'dry-run': { type: 'boolean' },
    prerelease: { type: 'string' },
  },
})
const [line, releaseAs] = positionals
if (!['vue2', 'vue3'].includes(line) || positionals.length > 2)
  throw new Error(
    'Usage: pnpm release vue2|vue3 [patch|minor|major|version] [--first-release] [--dry-run] [--prerelease beta]',
  )
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim()
if (!values['dry-run'] && git('status', '--porcelain'))
  throw new Error('Commit working changes before releasing')
const { legacyHead } = JSON.parse(readFileSync('release.config.json', 'utf8'))
const legacyHashes = git('rev-list', legacyHead).split('\n')
await catv({
  firstRelease: values['first-release'],
  dryRun: values['dry-run'],
  prerelease: values.prerelease,
  releaseAs,
  tagPrefix: `${line}-v`,
  packageFiles: [`packages/${line}/package.json`],
  bumpFiles: [`packages/${line}/package.json`],
  infile: `packages/${line}/CHANGELOG.md`,
  preset: {
    name: new URL('./release-preset.mjs', import.meta.url).href,
    legacyHashes,
  },
  path: [
    '.',
    `:(exclude)packages/${line === 'vue2' ? 'vue3' : 'vue2'}`,
    ':(exclude)**/CHANGELOG.md',
  ],
})
console.log(
  'Review the release commit and tag, then push with git push --follow-tags origin master.',
)
