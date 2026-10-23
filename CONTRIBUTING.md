# Development

Use Node 24 and pnpm 11.25.0. Work directly in the repository. Development and releases use master.

Read [AGENTS.md](./AGENTS.md) for collaboration rules and the [Issue fixing workflow](./.github/ISSUE_FIXING.md) when investigating a reported problem.

```sh
pnpm install
pnpm dev
pnpm check
```

- packages/core: framework-independent Viewer.js lifecycle and temporary galleries.
- packages/vue2: Vue 2 plugin, component and directive.
- packages/vue3: local component, directive and useViewer.
- docs: Chinese and English VitePress documentation, local examples and sandboxed playground.
- dist/vue2 and dist/vue3: generated publishable packages.

Keep both Vue versions and both documentation languages in sync. Runtime changes need lifecycle regression tests. pnpm check validates formatting, types, tests, package builds, SSR import, ES5 syntax, ESM/CommonJS declarations, packed content and documentation.

Run browser checks separately:

```sh
pnpm exec playwright install chromium
pnpm test:docs
```

The suite builds the docs and starts a preview server on port 5191. It covers Vue 2 and Vue 3 examples, reactive options, gallery cleanup, playground editing and errors, and English mobile layout. Set `DOCS_BASE=/v-viewer/` to check the GitHub Pages deployment path. Use `--with-deps` when installing Chromium on Linux CI.

Failed tests retain screenshots and traces in `test-results/docs/`. With `CI=true`, the HTML report is written to `playwright-report/docs/`; open it with `pnpm exec playwright show-report playwright-report/docs`. CI, release validation and Pages upload diagnostics even after test failures and retain them for 14 days.

# Releases

Use Conventional Commits. commit-and-tag-version creates the version bump, changelog, release commit and annotated tag. Legacy commits are excluded using release.config.json; historical changelogs remain available in Git.

```sh
pnpm release vue2 --first-release --dry-run
pnpm release vue2 --first-release
pnpm release vue3 --first-release
# Later releases:
pnpm release vue3 patch
# Review the commit and tags before pushing:
git push --follow-tags origin master
```

Pushing vue2-v* or vue3-v* triggers CI, npm publishing and a GitHub Release. Stable Vue 2 uses legacy; Vue 3 uses latest; prereleases use vue2-beta or vue3-beta. CI publishes the exact tarball it validated. Configure npm Trusted Publishing for mirari/v-viewer, release.yml, environment npm before the first publication. Credentials must not be added to this repository.

The documentation workflow builds VitePress and publishes to gh-pages. The production site is https://v-viewer.mirari.cc/ and uses the root base path. Cloudflare Pages serves the generated files from gh-pages without an additional build. Keep the CNAME file and hosting domain configuration aligned.
