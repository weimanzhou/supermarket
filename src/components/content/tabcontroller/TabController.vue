<template>
  <div class="tab-controller">
    <div class="tab-controller-item"
         v-for="(item, index) in titles"
         :key="index"
         @click="currIndex = index"
         :class="{ active: currIndex === index }">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabController',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currIndex: 0
    }
  }
}
</script>

<style scoped>
  .tab-controller {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }

  .tab-controller-item {
    flex:1;
  }

  .tab-controller-item span {
    padding: 4px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>
