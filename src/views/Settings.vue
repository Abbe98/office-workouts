<template>
  <main>
      <h2>Settings</h2>
      <label>Search service:
        <select v-model="searchService">
          <option value="google">Google</option>
          <option value="ddg">DuckDuckGo</option>
          <option value="youtube">YouTube</option>
        </select>
      </label>
  </main>
</template>

<script>
import { vault } from '../store';

export default {
  name: 'settings',
  components: {},
  computed: {
    searchService: {
      get () { return vault.state.searchService },
      set (value) { vault.commit('setSearchService', value) },
    },
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="postcss" scoped>

</style>
