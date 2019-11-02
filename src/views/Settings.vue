<template>
  <main>
      <h2>Settings</h2>
      <label>Search service:
        <select v-model="searchService">
          <option value="google">Google</option>
          <option value="ddg">DuckDuckGo</option>
          <option value="youtube">YouTube</option>
        </select>
      </label><br>

      <label>Working hours starts at:
        <input v-model="workHoursStart" type="number" :max="workHoursEnd" min="0" />
      </label><br>

      <label>Working hours ends at:
        <input v-model="workHoursEnd" type="number" max="23" :min="workHoursStart" />
      </label><br>
  </main>
</template>

<script>
import { vault } from '../store';

export default {
  name: 'settings',
  components: {},
  computed: {
    searchService: {
      get() { return vault.state.searchService; },
      set(value) { vault.commit('setSearchService', value); },
    },

    workHoursStart: {
      get() { return vault.state.workHoursStart; },
      set(value) { vault.commit('setWorkHoursStart', value); },
    },

    workHoursEnd: {
      get() { return vault.state.workHoursEnd; },
      set(value) { vault.commit('setWorkHoursEnd', value); },
    },
  },
};
</script>

<style lang="postcss" scoped>

</style>
