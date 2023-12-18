<template>
  <div>
    <button
      class="mc-bg-blue-500 mc-hover:bg-blue-700 mc-text-white mc-font-bold mc-py-2 mc-px-4 mc-rounded"
      @click="onClick"
    >
      <slot></slot>
    </button>
  </div>
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
