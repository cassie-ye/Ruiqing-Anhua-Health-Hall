// 引入登录API
import { loginAPI } from "@/apis/user";
// 引入vuex的mapMutations
import { mapMutations,mapActions } from "vuex";
export const useLogin = {
  methods: {
    // 引入user模块的setUserInfo和setToken
    ...mapMutations("user", ["setUserInfo", "setToken"]),
    ...mapActions("cart", ["getCartListAction"]),
    async login(loginObj) {
      // 调用登录接口
      const res = await loginAPI(loginObj);
      // TODO1：登录成功
      if (res.code === "H0000") {
        // 将token和userInfo保存到localStorage中
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
        // 将token和userInfo保存到vuex中
        this.setToken(res.data.token)
        this.setUserInfo(res.data.userInfo)
        this.getCartListAction(res.data.userInfo.id)
        // 弹框提示用户登录成功
        this.$message({
          type: "success",
          message: "登录成功",
        });
        // 跳转到首页
        this.$router.push("/");
        // TODO2：用户名不存在
      } else if (res.code === "H403") {
        this.$message({
          type: "error",
          message: "用户不存在",
        });
        // TODO3：密码错误
      } else if (res.code === "H500") {
        this.$message({
          type: "error",
          message: "密码错误",
        });
      }
    },
  },
};
