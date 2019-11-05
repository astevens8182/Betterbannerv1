import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { AppRouter } from "./route-init.js";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router: AppRouter,
  render: function(gimme_a_component) {
    return gimme_a_component(App);
  }
}).$mount("#app");
