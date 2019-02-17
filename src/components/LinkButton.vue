<template>
  <button @click="$emit('link-click')"><slot /></button>
</template>

<script>
export default {
  name: 'link-button',
};
</script>

<style lang="postcss" scoped>
button {
  background: none !important;
  color: var(--text-on-background);
  border: none;
  padding: 0 !important;
  font: inherit;
  font-size: 85%;
  border-bottom: 1px solid var(--text-on-background);
  cursor: pointer;
  margin: auto;
  display: block;
}
</style>
