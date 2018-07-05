import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Service from '@/components/Service'
import Work from '@/components/Work'
import WorkDetail from '@/components/WorkDetail'
import Contact from '@/components/Contact'
import Post from '@/components/Post'

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
      path: '/post/:post',
      name: 'Post',
      component: Post
    }
  ]
})
