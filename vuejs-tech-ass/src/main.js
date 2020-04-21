import Vue from 'vue'
import App from './App.vue'
// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//import font-awesome css
import "font-awesome/css/font-awesome.min.css";

//import bar chart
import VueCharts from 'vue-chartjs'
Vue.use(VueCharts);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
