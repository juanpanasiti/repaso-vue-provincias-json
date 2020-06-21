import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detalle-provincia/:abrev',
    name: 'DetalleProvincia',
    component: () => import('../views/DetalleProvincia.vue')
  },
  {
    path: '/con-puerto',
    name: 'ConPuerto',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/mapa-argentina',
    name: 'MapaArgentina',
    component: () => import('../views/MapaArgentina.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
