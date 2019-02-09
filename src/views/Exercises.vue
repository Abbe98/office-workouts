<template>
  <main class="exercises">
    {{ id }}
  </main>
</template>

<script>
export default {
  name: 'exercises',
  props: ['type', 'id'],
  created() {
    // #TODO get exercise details
    console.log(this.type, this.id);
  },
};
</script>
