<template>
  <main class="exercises">
    {{ id }}
  </main>
</template>

<script>
export default {
  name: 'exercises',
  props: ['id'],
  created() {
    // #TODO get exercise details
    console.log(this.id);
  },
};
</script>
