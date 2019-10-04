import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import notfound from '@/views/notfound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
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
