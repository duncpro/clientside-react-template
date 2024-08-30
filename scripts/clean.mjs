#!/usr/bin/env npx zx

// Do not swallow stdout produced by child processes.
$.verbose = true;

await $`rm -r node_modules`;

