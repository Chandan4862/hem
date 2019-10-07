import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import notfound from '@/views/notfound'
import list from '@/views/product-list'
import productDetail from './views/ProductShow.vue'
import HomePage from './views/HomePage.vue'
import Register from './views/Register.vue'
import BuyNow from './views/Buy.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
      path: '/product-details',
      name: 'product-show',
      component: productDetail,
      props: true
    },
    {
      path: '/buynow',
      name: 'buy-now',
      component: BuyNow,
      props: true
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