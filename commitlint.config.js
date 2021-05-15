module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'scope-case': [0, 'never'],
    'scope-enum': [
      2,
      'always',
    ],
  },
}
