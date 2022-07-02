import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" 
Vue.config.productionTip = false

Vue.filter('toReverse',(val,a)=>{
  return val.split('').reverse().join(a)
}

)

new Vue({
  render: h => h(App),
}).$mount('#app')
