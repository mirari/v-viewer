import createPreset, {
  DEFAULT_COMMIT_TYPES,
} from 'conventional-changelog-conventionalcommits'

export default function releasePreset({ legacyHashes = [] } = {}) {
  return createPreset({
    // CATV uses the same preset for version recommendations and changelogs.
    // Exclude legacy history from both, even before the first new release tag.
    ignoreCommits: legacyHashes.length
      ? new RegExp(`\\n-hash-\\n(?:${legacyHashes.join('|')})(?:\\n|$)`)
      : undefined,
    types: DEFAULT_COMMIT_TYPES.map((entry) =>
      ['docs', 'refactor', 'build'].includes(entry.type)
        ? { ...entry, effect: 'changelog' }
        : entry,
    ),
  })
}
