import Vue from 'vue'
import App from './App.vue'
// import Vue2OrgTree from 'vue2-org-tree';

// Vue.use(Vue2OrgTree)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
