import Vue from "vue";
// import Vuex from "vuex";
import yuex from "../plugin/yuex";

import common from "./modules/common";

//挂载Vuex
Vue.use(yuex);

const store = new yuex.Store({
  state: {
    age:18,
  },
  getters:{
    get2age(state){
      return state.age * 2
    }
  },
  // modules: {
  //   common,
  //   books: {
  //     state: {
  //       bookList: [0, 1, 2, 3],
  //     },
  //   },
  // },
});

export default store;
