<template>
  <div class="recommand">
    <div v-for="(item, index) in recommand" :key="index" class="recommand-item">
      <a :href="item.herf">
        <img :src="item.src" :alt="item.alt">
        <div>{{ item.content }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    recommand: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommand {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 5px solid #EEE;
  }

  .recommand-item {
    flex: 1;
  }

  .recommand-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
