const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/monolithic/runtime.js',
    './dist/monolithic/polyfills.js',
    './dist/monolithic/scripts.js',
    './dist/monolithic/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/login-element.js');
  // await fs.copyFile(
  //   './dist/monolithic/styles.css',
  //   'elements/login-element.styles.css'
  // );
})();
