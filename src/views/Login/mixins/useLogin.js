import { loginAPI } from "@/apis/user";
export const useLogin = {
  methods: {
    async login(loginObj) {
      const res = await loginAPI(loginObj);
      console.log(res);
      // 登录成功
      if (res.code === "H0000") {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        this.$message({
          type: "success",
          message: "登录成功",
        });
        this.$router.push("/");
        // 用户名不存在
      } else if (res.code === "H403") {
        this.$message({
          type: "error",
          message: "用户不存在",
        });
        // 密码错误
      } else if (res.code === "H500") {
        this.$message({
          type: "error",
          message: "密码错误",
        });
      }
    },
  },
};
