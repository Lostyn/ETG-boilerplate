# Electron + Typescript + Gulp

This Boilerplat for Desktop apps use <a href="https://electron.atom.io/">Electron</a> with <a href="https:/https://www.typescriptlang.org/">TypeScript</a> and <a href="https://gulpjs.com/">Gulp</a>.

## Install

Clone the repo and install dependencies:

```bash
git clone https://github.com/Lostyn/ETG-boilerplate.git
cd ETG-boilerplate
npm install
```

## Starting Development

Start the app in the `development` environment:

```bash
npm run dev
```

Auto reload and restart is handle by <a href="https://github.com/Quramy/electron-connect/">electron-connect</a>.  
Restart is trigger when `src/main` script is modified, and reload when changes append in `src/renderer`, `src/renderer/index.html` or `src/renderer/res` folders.