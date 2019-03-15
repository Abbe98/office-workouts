import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence();

export const vault = new Vuex.Store({
  state: {
    remindersOn: false,
  },
  mutations: {
    turnOnReminder(state) {
      state.remindersOn = true;
    },
  },
  actions: {

  },
  plugins: [vuexLocal.plugin],
});

export const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
