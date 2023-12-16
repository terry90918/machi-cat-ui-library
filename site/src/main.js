import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";

import MachiCat from "../../components";
Vue.use(MachiCat);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount("#app");
