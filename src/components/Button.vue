<!-- src/components/Button.vue -->
<template>
  <button :class="['mc-btn', `mc-btn-${type}`, `mc-btn-${size}`]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default', // 其他選項可能包括 'primary', 'danger' 等
    },
    size: {
      type: String,
      default: 'default', // 其他選項可能包括 'large', 'small' 等
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style scoped>
.mc-btn {
  /* 在這裡添加你的基本按鈕樣式 */
}

.mc-btn-default {
  /* 在這裡添加你的預設按鈕樣式 */
}

.mc-btn-primary {
  /* 在這裡添加你的主要按鈕樣式 */
}

.mc-btn-danger {
  /* 在這裡添加你的危險按鈕樣式 */
}

.mc-btn-large {
  /* 在這裡添加你的大按鈕樣式 */
}

.mc-btn-small {
  /* 在這裡添加你的小按鈕樣式 */
}
</style>