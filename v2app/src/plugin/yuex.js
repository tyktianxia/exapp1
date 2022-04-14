import VueRouter from "vue-router";

let install = function(Vue, options) {
  Vue.prototype.$yanzhi = "xiaonan";
  Vue.mixin({ beforeCreate: vuexInit });
  function vuexInit() {
    let options = this.$options;
    if (options?.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

// function Store(options = {}) {
//   let { state, getters, mutation, action } = options;
//   this.state = typeof state == "function" ? state() : state;
//   this.getters = getters;
//   this.mutation = mutation;
//   this.action = action;

//   this.dispatch = function(type, payload) {};

//   this.commit = function(type, payload) {};
// }

// Store.commit = (state, type, payload) => {};

class Store {
  constructor(options = {}) {
    console.log("store初始化：", options);

    this.myState = new VueRouter({
      data() {
        return {
          state: options.state,
        };
      },
    });
    this.getters = {};
    this.mutations = options.mutation;
    this.actions = options.actions;
    Object.keys(options.getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: function() {
          return options.getters[key](this.state);
        },
      });
    });
  }

  get state() {
    return this.myState.state;
  }
}

export default {
  install,
  Store,
};
