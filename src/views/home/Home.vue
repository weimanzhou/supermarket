<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getMainMutilData } from 'network/main'

export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar
  },
  // 在组件创建完毕后发起网络请求获取主页数据
  created() {
    // getMainMutilData().then(res => {
    //   console.log(res)
    //   this.banners = res.banners
    //   this.recommends = res.recommends
    // })
    console.log('created')
  }
}
</script>

<style scoped>
  /* @import url('~assets/css/base.css'); */

  .home-nav-bar {
    background-color: var(--color-tint);
    color: #FFF;
  }
</style>
