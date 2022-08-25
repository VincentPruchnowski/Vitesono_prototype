import fs from "fs";

// npm install && npm audit fix && cd app.sys.svelte && npm install && npm audit fix

_main();

function _main() {
  createMissingDirs();
}

function createMissingDirs() {
  for (const d of ["logs", "temp"]) {
    const dir = `nginx.dev/nginx-1.20.2/${d}`;
    if (fs.existsSync(dir) === false) {
      fs.mkdirSync(dir);
    }
  }
}
