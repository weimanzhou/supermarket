<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    background: #f6f6f6;
    box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.1)
  }
</style>