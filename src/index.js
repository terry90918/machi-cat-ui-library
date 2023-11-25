// src/index.js
import './styles/index.scss';
import Button from './components/Button.vue';

const install = (Vue) => {
  Vue.component('mc-button', Button);
};

// 如果是在瀏覽器直接引入，則自動安裝
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
