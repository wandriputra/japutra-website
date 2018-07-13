import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/Home'
import About from '@/components/Pages/About'
import Service from '@/components/Pages/Service'
import Work from '@/components/Pages/Work'
import WorkDetail from '@/components/Pages/WorkDetail'
import Contact from '@/components/Pages/Contact'
import Japutras from '@/components/Pages/Japutras'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { isHome: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { isHome: false }
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
      meta: { isHome: false }
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      meta: { isHome: false }
    },
    {
      path: '/work-detail',
      name: 'work-detail',
      component: WorkDetail,
      meta: { isHome: false }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { isHome: false }
    },
    {
      path: '/japutras',
      name: 'japutras',
      component: Japutras,
      meta: { isHome: false }
    }
  ]
})
