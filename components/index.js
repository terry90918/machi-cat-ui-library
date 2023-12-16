import { default as Button } from './button';
import { default as version } from './version';

const components = [
  Button,
];

const install = (Vue) => {
  components.map(component => {
    Vue.use(component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Button,
  install,
  version,
};

export default {
  version,
  install,
};