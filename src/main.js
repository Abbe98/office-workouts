import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store, vault } from './store';

import axios from 'axios';
import VueSkipTo from 'vue-skip-to';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRedo, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faRedo);
library.add(faCog);

library.add(faGoogle);
library.add(faSearch);
library.add(faYoutube);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueSkipTo);

Vue.prototype.$http = {};

// use root as endpoint
Vue.prototype.$http.base = axios.create();

new Vue({
  router,
  store,
  vault,
  render: h => h(App),
}).$mount('#app');

document.body.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    router.push('/exercises');
  }
});
