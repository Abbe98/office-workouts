<template>
  <main class="exercises">
    <p v-if="exercise">{{ exercise.name }}</p>
    <router-link to="/exercises">Another one?</router-link>
    <button @click="initInterval">Get hourly reminders?</button>
  </main>
</template>

<script>
import { createInterval, getNotificationPermissions } from '../helpers';

export default {
  name: 'exercises',
  props: ['type', 'id'],
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
