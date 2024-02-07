export default {
  namespaced: true,
  state() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      token: JSON.parse(localStorage.getItem("token")),
    };
  },
};
