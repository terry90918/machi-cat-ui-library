// vue.config.js
const fs = require('fs');
const path = require('path');
const { defineConfig } = require('@vue/cli-service')

const variablesScssPath = path.resolve(__dirname, './src/styles/_variables.scss');
const variablesScssContent = fs.readFileSync(variablesScssPath, 'utf-8').toString();

console.log(`Reading _variables.scss from ${variablesScssPath}`);
console.log(`Content of _variables.scss: ${variablesScssContent}`);

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: (sourceContent) => `${variablesScssContent}\n${sourceContent}`
      },
      scss: {
        additionalData: (sourceContent) => `${variablesScssContent}\n${sourceContent}`
      },
    },
  },
});
