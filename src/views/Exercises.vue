<template>
  <main class="exercises">
    <div class="center">
      <p v-if="exercise">{{ exercise.name }}</p>
      <router-link title="Another random one?" to="/exercises"><font-awesome-icon icon="redo" size="4x" /></router-link>
    </div>

    <link-button @link-click="initInterval">Get hourly reminders?</link-button>
  </main>
</template>

<script>
import { createInterval, getNotificationPermissions } from '../helpers';
import LinkButton from '../components/LinkButton';

export default {
  name: 'exercises',
  props: ['type', 'id'],
  components: {
    LinkButton,
  },
  data() {
    return {
      exercise: null,
    };
  },
  mounted() {
    this.newExercise(this.type, this.id);
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
      // #TODO init interval if already enabled?
      getNotificationPermissions().then(resp => {
        if (resp) {
          createInterval(this);
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
