<!-- dev/App.vue -->
<template>
  <div id="app">
    <div class="small-text">這是小文字樣式</div>
    <div class="small-text--test">這是小文字樣式</div>
    <div class="medium-text">這是中文字樣式</div>
    <div class="large-text">這是大文字樣式</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
// 測試 SCSS 變數是否能正常使用
.small-text--test {
  font-size: $font-size-small;
  font-weight: $font-weight-light;
}
</style>
