# Template for *Clientside* React Application
- `npm run build` to build production distribution at `target/webpack`.
- `npm run dev` to launch auto-recompilation via `watchexec` 
  and Hot Reload via Webpack Dev Server.

## Expected System Dependencies for Compilation
- Node.js/NPM
- watchexec

## Philosophy

This template uses stable and well-supported build tools...
- Webpack for Bundling
- Microsoft's official TSC TypeScript Compiler
- Babel's official JSX Transform
- Facebook's official `react-refresh/babel` plugin for HMR.
- Webpack Dev Server for local development.
- Google's ZX for the build scripts

I tried to make this template as small as possible while still maintaing modularity (not using
an all-in-one build tool like Vite or esbuild).


## Getting Started
```shell
git clone https://github.com/duncpro/clientside-react-template.git
npm install # You must install dev dependencies before using the build scripts
npm run dev # Start auto recompilation and webpack dev server
```
