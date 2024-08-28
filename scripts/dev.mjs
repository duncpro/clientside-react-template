#!/usr/bin/env npx zx

// Do not swallow stdout produced by child processes.
$.verbose = true;

// Perform an initial compilation before starting the Webpack development server.
await $`STAGE=development ./scripts/compile.mjs`;

// Start a background process which recompiles for every change in the source set.
$`watchexec -w src STAGE=development ./scripts/compile.mjs`;

// Start the Webpack development server.
$`STAGE=development npx webpack serve`;

