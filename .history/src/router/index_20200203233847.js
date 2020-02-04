import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

// 安装路由
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home'
  },
  {
    path: '/catefory',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('views/profile/Profile.vue')
  }
]

const router = new VueRouter({
  // 使用 history 模式,不使用 hash 模式
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
