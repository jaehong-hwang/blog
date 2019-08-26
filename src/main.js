import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/buefy'

Vue.config.productionTip = false

const req = require.context(
  './components/global',
  true,
)

req.keys().forEach((filename) => {
  Vue.component(filename.split('/').pop().split('.').shift(), req(filename).default)
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
