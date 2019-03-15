<template>
  <main class="exercises">
    <div class="center">
      <p v-if="exercise">{{ exercise.name }}</p>
      <router-link title="Another random one?" to="/exercises"><font-awesome-icon icon="redo" size="4x" /></router-link>
    </div>

    <link-button v-if="!remindersOn" @link-click="initInterval">Get hourly reminders?</link-button>
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
</style>
