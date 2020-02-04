<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-bar-item-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-link"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    ipath: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // console.log(this.$router)
      return true;
      // return this.$router.path.indexof(this.path) !== -1
    },
    activeStyle() {
      return this.$router.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      // console.log(this.$router)
      this.$router.replace(this.ipath);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 16px;
}

.tab-bar-item img {
  /* 可以去除 img 的 3px 的外边距 */
  vertical-align: middle;
}
</style>
