import Vue from 'vue'
import Fabric from '@johannes-z/office-ui-fabric-vue'

import '@johannes-z/office-ui-fabric-vue/dist/office-ui-fabric-vue.css'

import App from './App.vue'

Vue.use(Fabric)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
