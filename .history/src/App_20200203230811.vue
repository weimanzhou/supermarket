<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'

export default {
  name: 'App',
  MainTabBar
}
</script>>

<style>
@import "./assets/css/base.css"

</style>
