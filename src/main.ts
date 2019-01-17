import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', name: 'home', component: () => import('./components/Home.vue')},
    { path: '/products', name: 'products', component: () => import('./components/Products.vue')},
    { path: '/about', name: 'about', component: () => import('./components/About.vue')}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
