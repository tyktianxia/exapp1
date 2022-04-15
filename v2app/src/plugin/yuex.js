let _Vue;
let install = function(Vue, options) {
  console.log("yuex install");
  _Vue = Vue;
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

class Store {
  constructor(options = {}) {
    console.log("yuex 初始化", options);
    this.myState = new _Vue({
      data() {
        return {
          state: options.state,
        };
      },
    });

    this.getters = {};

    Object.keys(options.getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return options.getters[key](this.state);
        },
      });
    });

    let mutations = options.mutations;
    this.commit = (type, payload) => {
      mutations[type](this.state, payload);
    };

    let actions = options.actions;
    this.dispatch = (type, payload) => {
      actions[type](this, payload);
    };

    
  }

  get state() {
    console.log("yuex:get state");
    return this.myState.state;
  }
}

export default {
  install,
  Store,
};
