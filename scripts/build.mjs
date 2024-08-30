#!/usr/bin/env npx zx

// This script builds the *production* distribution of the client.
// The resultant bundle will be written to `./target/webpack`.

// We'd like to be shown the stdout produced during the build process.
$.verbose = true;

await $`STAGE=production ./scripts/compile.mjs`;
await $`STAGE=production npx webpack --no-stats`;
