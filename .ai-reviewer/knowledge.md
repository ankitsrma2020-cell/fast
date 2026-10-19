# fast reviewer notes

## Architecture
This is a minimal Node.js 18+ ES-module application with a single executable entry point at `src/index.js`. The `start` script in `package.json` runs that file directly; there are no visible libraries, tests, build steps, or additional application layers.

## Conventions
- Use modern JavaScript ES modules, as indicated by `"type": "module"` in `package.json`.
- Keep the runnable entry point at `src/index.js`; `npm start` is defined as `node src/index.js`.
- Encapsulate top-level application behavior in a `main()` function and invoke it explicitly, following `src/index.js`.
- Target Node.js 18 or newer, per both `package.json` (`"engines": { "node": ">=18" }`) and `README.md`.
- Preserve the lightweight structure unless functionality requires introducing additional files or dependencies.

## Watch out for
- Changes that break direct execution with `npm start`, especially moving or renaming `src/index.js` without updating `package.json` and `README.md`.
- Introducing CommonJS syntax or unsupported runtime features that conflict with the ES-module configuration or Node.js 18 minimum.
- Adding dependencies or build tooling for functionality that can remain a simple direct Node.js script.
- Leaving the greeting or project naming inconsistent across `README.md`, `package.json`, and `src/index.js` (currently the repository heading says `fast`, while the package and output identify the project as `big`).