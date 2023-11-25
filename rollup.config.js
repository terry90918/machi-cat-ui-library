// rollup.config.js
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import scss from 'rollup-plugin-scss'; // Handle .scss files

export default {
  input: 'src/index.js', // 你的入口文件
  output: [
    {
      name: 'MachiCatUI',
      exports: 'named',
      file: 'dist/machi-cat-ui-library.esm.js', // Output file path
      format: 'esm', // Output format
    },
    {
      name: 'MachiCatUI',
      exports: 'named',
      file: 'dist/machi-cat-ui-library.umd.js', // Output file path
      format: 'umd', // Output format
    },
  ],
  plugins: [
    scss(), // Handle .scss files
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(), // Transpile to ES5
  ],
  external: ['vue'] // 告訴 rollup 不要將 Vue 打包進來，而是使用外部的 Vue
};
