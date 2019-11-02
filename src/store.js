import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence();

export const vault = new Vuex.Store({
  state: {
    remindersOn: false,
    searchService: 'google', // google, youtube, ddg
    workHoursStart: 8,
    workHoursEnd: 17,
  },
  mutations: {
    turnOnReminder(state) {
      state.remindersOn = true;
    },

    setSearchService(state, service) {
      state.searchService = service;
    },

    setWorkHoursEnd(state, time) {
      state.workHoursEnd = time;
    },

    setWorkHoursStart(state, time) {
      state.workHoursStart = time;
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
