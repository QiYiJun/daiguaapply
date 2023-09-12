import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from 'views/home/MyHome.vue'
import Welcome from 'components/Welcome.vue'
import KuGou from 'components/apply/KuGou.vue'
import KuWo from 'components/apply/KuWo.vue'
import GangBeng from 'components/read/GangBeng.vue'
import XiaoYueYue from 'components/read/XiaoYueYue.vue'

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
      },
      {
        path: '/kuwo',
        component: KuWo
      },
      {
        path: '/gangbeng',
        component: GangBeng
      },
      {
        path: '/xiaoyueyue',
        component: XiaoYueYue
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
