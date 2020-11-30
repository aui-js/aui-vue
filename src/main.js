import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $mix from './mix-view'
Vue.config.productionTip = false

Vue.use($mix);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
