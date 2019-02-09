<template>
  <main class="exercises">
    <p v-if="exercise">{{ exercise.name }}</p>
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
    // #TODO 404?
    this.$http.base.get(`${this.type}.json`)
      .then(response => (
        this.exercise = response.data.find(obj => {
          return obj.id === this.id;
        })
      ));
  },
};
</script>
