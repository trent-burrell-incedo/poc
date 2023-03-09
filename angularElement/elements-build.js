const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/angularElement/runtime.js',
        './dist/angularElement/polyfills.js',
        './dist/angularElement/scripts.js',
        './dist/angularElement/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js');
    await fs.copyFile('./dist/angularElement/styles.css', 'elements/styles.css')
    await fs.copyFile('./src/favicon.ico', 'elements/favicon.ico')
    await fs.copyFile('./native-shim.js', 'elements/native-shim.js')

})()