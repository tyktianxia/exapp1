let common = {
  state: () => ({
    userInfo: { name: "yanzhi" },
  }),
  getters:{
    getName(state){
      return state.userInfo.name;
    }
  },
  mutations:{

  }
};


export default common;