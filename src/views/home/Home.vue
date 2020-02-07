<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"/>
    <!-- 推荐 -->
    <home-recommand :recommands="recommands"/>
    <!-- 特别 -->
    <home-feature-view/>
    <!-- tab-controller -->
    <tab-controller class="home-tab-controller" :titles="['流行', '新款', '精选']"/>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
// 组件
import NavBar from 'components/common/navbar/NavBar'
import TabController from 'components/content/tabcontroller/TabController'

import HomeSwiper from './ccoms/HomeSwiper'
import HomeRecommnad from './ccoms/HomeRecommand'
import HomeFeatureView from './ccoms/HomeFeatureView'

// 方法
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
    NavBar,
    TabController,
    HomeSwiper,
    HomeRecommnad,
    HomeFeatureView
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

  #home {
    padding-top: 44px;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color: #FFF;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* z-index: 10; */
  }

  .home-tab-controller {
    position: sticky;
    top: 44px;

    background-color: skyblue;
  }
</style>
