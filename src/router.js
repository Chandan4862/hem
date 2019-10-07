import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import notfound from '@/views/notfound'
import list from '@/views/product-list'
import productDetail from './views/ProductShow.vue'
import HomePage from './views/HomePage.vue'
import Register from './views/Register.vue'
import cartview from './views/cartview.vue'
import profile from './views/profile.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
    },
    {
      path: '/product-details/:pid',
      name: 'product-show',
      component: productDetail,
      props: true
    },
    {
      path: '/cartview',
      name: 'viewcart',
      component: cartview
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem('token')
//   if (to.matched.some(record => record.meta.requiresAuth) && loggedIn == null) {
//     next('/')
//   }
//   next()
// })

export default router
