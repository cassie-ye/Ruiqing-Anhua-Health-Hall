export default {
  namespaced: true,
  state() {
    return {
      /* 
        用户信息从本地存储中获取
      */
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      
      /* 
        token从本地存储中获取
      */
      token: JSON.parse(localStorage.getItem("token")),
    };
  },
  mutations: {
    /* 
      设置用户信息
    */
    setUserInfo(state, obj) {
      state.userInfo = obj;
    },
    
    /* 
      设置token
    */
    setToken(state, token) {
      state.token = token;
    },
    
    /* 
      清除用户信息
    */
    clearUserInfo(state) {
      state.userInfo = {};
    },
    
    /* 
      清除token
    */
    clearToken(state) {
      state.token = "";
    },
  },
};
