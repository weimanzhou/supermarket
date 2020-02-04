<template>
  <tab-bar>
    <tab-bar-item ipath="/home">
      <img slot="tab-bar-item-icon" src="~asset/imgs/tabbar/home.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~asset/imgs/tabbar/home.svg" alt="">
      <div>主页</div>
    </tab-bar-item>
    <tab-bar-item ipath="/category">
img slot="tab-bar-item-icon" src="~asset/imgs/tabbar/home.svg" alt="">
      <img slot="tab-bar-item-icon-active" src="~asset/imgs/tabbar/home.svg" alt="">
      <div>主页</div>
    </tab-bar-item>
    <tab-bar-item ipath="/cart">

    </tab-bar-item>
    <tab-bar-item ipath="/profile">

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
