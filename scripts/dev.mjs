#!/usr/bin/env npx zx

// Do not swallow stdout produced by child processes.
$.verbose = true;

// Perform an initial compilation before starting the Webpack development server.
await $`STAGE=development ./scripts/compile.mjs`;

// Start the Webpack development server.
$`STAGE=development npx webpack serve`;

// Start a background process which recompiles for every change in the source set.
// Use `--postpone` to tell watchexec *not* to execute the command immediately, but instead
// wait until the first file change is detected.
// Use `--debounce` to allow the text editor 1 second to commit all changes to the source
// directory before attempting recompilation.
$`watchexec \
  --watch src \
  --postpone \
  --debounce 1sec \
  STAGE=development ./scripts/compile.mjs`;


