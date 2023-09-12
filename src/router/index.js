import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from 'views/home/MyHome.vue'
import Welcome from 'components/Welcome.vue'
import KuGou from 'components/apply/KuGou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: MyHome,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/kugou',
        component: KuGou
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
