<!-- src/components/Button.vue -->
<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'McBtn',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
