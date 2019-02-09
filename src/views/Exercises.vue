<template>
  <main class="exercises">
    <p v-if="exercise">{{ exercise.name }}</p>
    <router-link to="/exercises">Another one?</router-link>
  </main>
</template>

<script>
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
  },
  watch: {
    '$route': 'newExercise',
  },
};
</script>
