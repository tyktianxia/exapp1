import Storage from "vue-ls";
import Vue from "vue"

let options = {
  namespace: "vuejs__", // key键前缀
  name: "ls", // 命名Vue变量.[ls]或this.[$ls],
  storage: "local", // 存储名称: session, local, memory
};


Vue.use(Storage, options);

// Vue.prototype.$ls = Vue.ls;