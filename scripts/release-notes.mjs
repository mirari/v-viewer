import { readFileSync, writeFileSync } from 'node:fs'
const [tag, output] = process.argv.slice(2)
const match = /^(vue[23])-v(\d+\.\d+\.\d+(?:-[\w.]+)?)$/.exec(tag || '')
if (!match) throw new Error('Invalid release tag')
const [, line, version] = match
const manifest = JSON.parse(readFileSync(`dist/${line}/package.json`, 'utf8'))
if (
  manifest.version !== version ||
  (line === 'vue2'
    ? !version.startsWith('4.')
    : Number(version.split('.')[0]) < 5)
)
  throw new Error('Tag does not match its version line')
const changelog = readFileSync(`packages/${line}/CHANGELOG.md`, 'utf8')
const sections = changelog.split(/\n(?=#{2,3} \[?\d+\.\d+\.\d+)/)
const section = sections.find((text) =>
  new RegExp(
    '^#{2,3} \\[?' + version.replaceAll('.', '\\.') + '(?:\\]|\\s|$)',
  ).test(text),
)
if (!section) throw new Error('Release notes missing')
writeFileSync(output, section.trim() + '\n')
