import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

import './util/vuels.js'

// import Yuex from "./plugin/yuex"

Vue.config.productionTip = false
Vue.prototype.$store = store;

// Vue.use(Yuex)
let vm = new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
})

export default vm;
