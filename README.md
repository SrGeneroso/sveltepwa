# Svelte + Vite + PWA

This template should help get you started developing with Svelte in Vite to make PWA.

## PWA
We add [PWA Vite Plugin](https://vite-pwa-org.netlify.app/), [PWA Assets Generator](https://vite-pwa-org.netlify.app/assets-generator/) and [Puppeteer](https://pptr.dev/) to automate some task needed to create a complete featured PWA.

This repo has 2 customs special files.
First, you have a `pwa.config.js` where you can customize your web manifest. Also, you have `scripts/autoscreenshots.js` to setup puppeteer to take screenshot for a full rich PWA experience that you can run with `npm run pwa`.

Currently, the project is configured to use `favicon.svg` as the required image to generate the assets for the PWA manifest. You should swap your own logo with `public/favicon.svg`.

You can edit the `package.json` to pass "dark" or "light" as first parameter and the path as second parameter to the screenshooter script.