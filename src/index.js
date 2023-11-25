// src/index.js
import './styles/index.scss';

const install = (Vue) => {
  // 這裡可以添加其他的全局註冊
};

// 如果是在瀏覽器直接引入，則自動安裝
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
