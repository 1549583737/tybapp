// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from './i18n'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'common/style/normalize.css'
// import './assets/iconfont/iconfont.css'
import 'common/style/common.css'
import store from './store'
import directives from './directives'

console.log('i18n: ', VueI18n)

Vue.use(Mint)
// Vue.use(store)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueI18n,
  directives,
  template: '<App/>',
  components: { App }
})

// window.document.addEventListener('deviceready', function () {
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     VueI18n,
//     directives,
//     template: '<App/>',
//     components: { App }
//   })
//   // window.navigator.splashscreen.hide()
// }, false)
