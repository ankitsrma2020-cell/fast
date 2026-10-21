# fast reviewer notes

## Architecture

This is a minimal JavaScript starter project with a Node.js entry point at `src/index.js`. `npm start` executes that file directly under Node 18+; `app.js` contains separate browser-side DOM interaction code and is not referenced by the package script.

## Conventions

- Use JavaScript with native ES module configuration: `package.json` sets `"type": "module"`.
- Preserve Node 18+ compatibility, as declared by `package.json` (`"engines": { "node": ">=18" }`) and documented in `README.md`.
- The executable application entry point is `src/index.js`; changes intended to affect `npm start` should be made or wired there.
- Keep the Node startup flow simple: `src/index.js` defines a `main()` function and invokes it at module scope.
- Browser DOM code follows direct element lookup and event-handler wiring, as shown in `app.js` with `document.querySelector(...)` and `button.addEventListener(...)`.
- User-visible browser text is assigned through `message.textContent`, not HTML injection (`app.js`).

## Watch out for

- Do not assume `app.js` runs during `npm start`; `package.json` explicitly runs only `node src/index.js`, and no browser bundler or HTML entry point is shown.
- Keep changes compatible with a Node execution environment unless the start script and project structure are intentionally changed; browser globals such as `document` are unavailable in `src/index.js`.
- Avoid changing the documented command or entry point without updating both `README.md` and `package.json`.
- Note the naming mismatch before introducing additional metadata: the repository/README heading says `fast`, while `package.json` names the package `big` and `src/index.js` logs `"Hello from big!"`.