import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueSkipTo from 'vue-skip-to';

Vue.config.productionTip = false;

Vue.use(VueSkipTo);

Vue.prototype.$http = {};

// #TODO Example endpoint configuration - change it to your API endpoint or create duplicate ones.
Vue.prototype.$http.wdqs = axios.create({
  baseURL: 'https://query.wikidata.org',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
