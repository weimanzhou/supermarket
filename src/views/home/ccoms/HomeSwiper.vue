<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.src" :alt="item.alt">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: []
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>
