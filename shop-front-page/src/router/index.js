import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes,
  //네비실행시 스크롤 상단 리로드
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } }
})

export default router
