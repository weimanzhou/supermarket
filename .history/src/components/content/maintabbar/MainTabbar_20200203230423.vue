<template>
  <tab-bar>
    <tab-bar-item ipath="/home">
      <img slot="tab-bar-item-icon" src="~asset/imgs/tabbar/home.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~asset/imgs/tabbar/home-active.svg" alt="">
      <div>首页</div>
    </tab-bar-item>
    <tab-bar-item ipath="/category">
      <img slot="tab-bar-item-icon" src="~asset/imgs/tabbar/category.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~asset/imgs/tabbar/home.svg" alt="">
      <div>分类</div>
    </tab-bar-item>
    <tab-bar-item ipath="/cart">
      <img slot="tab-bar-item-icon" src="~asset/imgs/tabbar/home.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~asset/imgs/tabbar/home.svg" alt="">
      <div>购物车</div>
    </tab-bar-item>
    <tab-bar-item ipath="/profile">
      <img slot="tab-bar-item-icon" src="~asset/imgs/tabbar/home.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~asset/imgs/tabbar/home.svg" alt="">
      <div>主页</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
export default {
  name: 'MainTabbar'
}
</script>

<style>

</style>
