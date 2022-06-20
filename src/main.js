import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import './assets/index.less'
import 'bootstrap/dist/css/bootstrap.css'
// 基地址配置
axios.defaults.baseURL = 'https://www.escook.cn'
// 将axios方法添加到Vue原型上
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
