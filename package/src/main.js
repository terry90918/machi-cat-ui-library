import components from './components';
import './styles/index.scss';

const install = (Vue) => {
  components.map((component) => {
    Vue.use(component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};