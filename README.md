# Svelte + Vite + PWA

This template should help get you started developing with Svelte in Vite to make PWA.

## PWA
We add [PWA Vite Plugin](https://vite-pwa-org.netlify.app/), [PWA Assets Generator](https://vite-pwa-org.netlify.app/assets-generator/) and [Puppeteer](https://pptr.dev/) to automate some task needed to create a complete featured PWA.

This repo has 2 customs special files.
First, you have a `pwa.config.js` where you can customize your web manifest. Also, you have `screenshots.js` to setup puppeteer to take screenshot for a full rich PWA experience that you can run with `npm run screen`.

Currently, the project is configured to use `favicon.svg` as the required image to generate the assets for the PWA manifest. You should swap your own logo with `public/favicon.svg`.

## Technical considerations

**Why use this over SvelteKit?**

This template contains as little as possible to get started with Vite + Svelte as a PWA, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project for simple PWA apps.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```