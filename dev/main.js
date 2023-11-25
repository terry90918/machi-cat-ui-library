// dev/main.js
import Vue from 'vue';
import App from './App.vue';
import MyUiLibrary from '../src/index.js'; // 匯入你的 UI 框架

Vue.use(MyUiLibrary); // 使用你的 UI 框架

new Vue({
  render: h => h(App),
}).$mount('#app');
