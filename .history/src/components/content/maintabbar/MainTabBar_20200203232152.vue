<template>
  <tab-bar>
    <tab-bar-item ipath="/home">
    // 这里 src  assets
      <img slot="tab-bar-item-icon" src="~assets/imgs/tabbar/home.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~assets/imgs/tabbar/home-active.svg" alt="">
      <div>首页</div>
    </tab-bar-item>
    <tab-bar-item ipath="/category">
      <img slot="tab-bar-item-icon" src="~assets/imgs/tabbar/menu.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~assets/imgs/tabbar/menu-active.svg" alt="">
      <div>分类</div>
    </tab-bar-item>
    <tab-bar-item ipath="/cart">
      <img slot="tab-bar-item-icon" src="~assets/imgs/tabbar/share.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~assets/imgs/tabbar/share-active.svg" alt="">
      <div>购物车</div>
    </tab-bar-item>
    <tab-bar-item ipath="/profile">
      <img slot="tab-bar-item-icon" src="~assets/imgs/tabbar/relationship.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~assets/imgs/tabbar/relationship-active.svg" alt="">
      <div>主页</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
</script>

<style>

</style>
