# Electron + Svelte + TS + Vite

A simple template that doesn't use webpack for creating electron app with Svelte and TS.

It uses good old tsc to transpile the main process ts files into js and Vite for handling the svelte part.

- full TS support across renderer and main process
- hot reload renderer process
- hotkey to restart the app
- no complicated webpack config

`npm run dev:all` to start the app

`Command / Control + R` to restart the app

Tested on Windows and Mac.