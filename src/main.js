import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueSkipTo from 'vue-skip-to';

Vue.config.productionTip = false;

Vue.use(VueSkipTo);

Vue.prototype.$http = {};

// use root as endpoint
Vue.prototype.$http = axios.create();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
