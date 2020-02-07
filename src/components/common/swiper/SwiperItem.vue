<template>
  <div class="silde">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style>
  .swiper-item {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
