#!/usr/bin/env npx zx

// This script compiles TSX to JSX using TSC (Microsoft's Typescript Compiler) and then 
// compiles the resultant JSX into plain JS using the Babel.js Javascript compiler.
// It DOES NOT bundle the Javascript using Webpack though, that happens later.

// We'd like to be shown the stdout produced during the build process.
$.verbose = true;

// Compile the TypeScript TSX files to JSX files.
switch (process.env.STAGE) {
  case "production":
    await $`npx tsc`;
    break;
  case "development":
    await $`npx tsc -p tsconfig.development.json`;
    break;
}

// Compile the JSX files to JS.
await $`npx babel target/tsc --out-dir target/babel`;
