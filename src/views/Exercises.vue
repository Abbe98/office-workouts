<template>
  <main v-if="exercise" class="exercises">
    <div class="center">
      <p>{{ exercise.name }}</p>
      <router-link title="Another random one?" to="/exercises"><font-awesome-icon class="reload-icon" :icon="['fas', 'redo']" size="4x" /></router-link>
    </div>

    <link-button v-if="!remindersOn" @link-click="initInterval">Get hourly reminders?</link-button>
    <a v-if="searchService == 'google'" class="search-btn" target="_blank" :href="'https://www.google.com/search?q=' + exercise.name" title="Search for this exercise on Google?"><font-awesome-icon :icon="['fab', 'google']" size="2x" /></a>
    <a v-if="searchService == 'youtube'" class="search-btn" target="_blank" :href="'https://www.youtube.com/results?search_query=' + exercise.name" title="Search for this exercise on YouTube?"><font-awesome-icon :icon="['fab', 'youtube']" size="2x" /></a>
    <a v-if="searchService == 'ddg'" class="search-btn" target="_blank" :href="'https://duckduckgo.com/?q=' + exercise.name" title="Search for this exercise on DuckDuckGo?"><font-awesome-icon :icon="['fas', 'search']" size="2x" /></a>
  </main>
</template>

<script>
import { mapState } from 'vuex';

import { createInterval, getNotificationPermissions } from '../helpers';
import LinkButton from '../components/LinkButton';
import { vault } from '../store';

export default {
  name: 'exercises',
  props: ['type', 'id'],
  components: {
    LinkButton,
  },
  computed: {
    ...mapState({
      remindersOn: state => vault.state.remindersOn,
    }),
    searchService: {
      get () { return vault.state.searchService },
    }
  },
  data() {
    return {
      exercise: null,
    };
  },
  mounted() {
    this.newExercise(this.type, this.id);
    if (this.remindersOn) {
      createInterval(this);
    }
  },
  methods: {
    newExercise() {
      // #TODO 404?
      this.$http.base.get(`${this.type}.json`)
        .then(response => (
          this.exercise = response.data.find(obj => {
            return obj.id === this.id;
          })
        ));
    },
    initInterval() {
      getNotificationPermissions().then(resp => {
        if (resp) {
          createInterval(this);
          vault.commit('turnOnReminder');
        }
      });
    },
  },
  watch: {
    '$route': 'newExercise',
  },
};
</script>

<style lang="postcss" scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

p {
  font-size: 3em;
}

.reload-icon {
  transition: transform .3s ease-in-out;
}

.reload-icon:hover {
  transform: rotate(14deg);
}

.search-btn {
  position: fixed;
  bottom: 1.5em;
  right: 1.5em;
}
</style>
