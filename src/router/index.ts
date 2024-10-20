import VueRouter from 'vue-router'
import AuthPage from '../pages/AuthPage.vue'
import Vue from 'vue'
import RequestList from '../pages/RequestListPage.vue'


Vue.use(VueRouter)

const routes = [
   {
      path: '/auth',
      name: 'AuthPage',
      component: AuthPage,
   },
   {
    path: '/',
    name: 'RequestList',
    component: RequestList
   }
]

const router = new VueRouter({
   mode: 'history',
   routes,
})

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token')
  
    if (!token && to.name !== 'AuthPage')
      next({ name: 'AuthPage' })
    if (token && to.name === 'AuthPage') {
        next({ name: 'RequestList' })
    }
    else { next() }
  })


export default router
