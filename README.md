# packages-publishing-sample

## Problem

We have packages that have entry point set as TS file in `package.json` e.g. `"main": "src/index.ts"`. The problem occurs when using one of such packages as dependency of another package. In that case, when trying to bundle such package `microbundle` gets "confused" as it is not able to transpile dependencies.

Open https://github.com/karolisvram/packages-publishing-sample/blob/main/packages/b/src/index.ts for a demo.

## Solutions

1. Only use published npm packages as dependency.
2. Always point main entry to bundle e.g. `dist/index.js`.
3. Keep using TS files as main entry but when bundling, use bundled version i.e. `dist/index.js`.
