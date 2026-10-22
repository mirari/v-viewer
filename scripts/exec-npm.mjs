import { execFileSync } from 'node:child_process'
import { basename, dirname, resolve } from 'node:path'

export function execNpm(args, options) {
  if (process.platform !== 'win32') return execFileSync('npm', args, options)
  const configured = process.env.npm_execpath
  const entry =
    configured && basename(configured) === 'npm-cli.js'
      ? configured
      : resolve(dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js')
  return execFileSync(process.execPath, [entry, ...args], options)
}
