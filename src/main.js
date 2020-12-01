import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import aui from 'aui-1.0'
 
Vue.prototype.aui = aui

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
