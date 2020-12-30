import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VCalendar from 'v-calendar';
import "./registerServiceWorker";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VCalendar);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
