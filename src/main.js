import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueSkipTo from 'vue-skip-to';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

library.add(faRedo);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueSkipTo);

Vue.prototype.$http = {};

// use root as endpoint
Vue.prototype.$http.base = axios.create();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
