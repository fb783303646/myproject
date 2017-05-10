// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import VueRouter from 'vue-router'
import routes from './routes'

import Mock from './mock'
Mock.bootstrap();

import store from "./vuex/store"  // 引入store 对象

Vue.use(Element)
Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    sessionStorage.removeItem('sessionId');
  }
  let user = JSON.parse(sessionStorage.getItem('sessionId'));
  if (!user && to.path != '/login') {
  	console.log(2);
    next({ path: '/login' })
  } else {
  	console.log(3);
    next()
  }
})


new Vue({
  router,
  store, // 注入到根实例中
  render: h => h(App)
}).$mount('#app')
