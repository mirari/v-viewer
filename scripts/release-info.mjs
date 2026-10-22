import { readFileSync, appendFileSync } from 'node:fs'
const tag = process.argv[2]
const match = /^(vue[23])-v(\d+\.\d+\.\d+(?:-(?:beta|rc)\.\d+)?)$/.exec(
  tag ?? '',
)
if (!match) throw new Error('Invalid release tag')
const [, line, version] = match
const manifest = JSON.parse(readFileSync(`dist/${line}/package.json`, 'utf8'))
if (
  manifest.version !== version ||
  (line === 'vue2'
    ? Number(version.split('.')[0]) !== 4
    : Number(version.split('.')[0]) < 5)
)
  throw new Error('Tag does not match package version')
const channel = version.includes('-')
  ? `${line}-beta`
  : line === 'vue2'
    ? 'legacy'
    : 'latest'
const output = `line=${line}\nversion=${version}\nchannel=${channel}\nprerelease=${version.includes('-')}\n`
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, output)
console.log(output)
