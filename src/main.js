import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/style/fontawesome/scss/fontawesome.scss'
import '../static/style/fontawesome/scss/fa-regular.scss'
import '../static/style/fontawesome/scss/fa-solid.scss'

Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
