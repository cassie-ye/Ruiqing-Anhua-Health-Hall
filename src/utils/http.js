// axios基础的封装
import axios from "axios";
import { Message } from "element-ui";
import router from "@/router/index";
import store from "@/store";
const httpInstance = axios.create({
  baseURL: "http://127.0.0.1:8801/health",
  timeout: 5000,
});
// 拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 判断是否存在token,如果存在将每个页面header添加token
    if (JSON.parse(localStorage.getItem("token"))) {
      config.headers.token = JSON.parse(localStorage.getItem("token"));
    }
    return config;
  },
  (e) => Promise.reject(e)
);
// axios响应拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    // const userStore = useUserStore();
    // 控制台 network 离线模式进行测试
    // console.log("dede", e);
    Message({
      type: "warning",
      message: e.message,
    });
    // Token的有效性可以保持一定时间 如果用户一段时间不做任何操作，Token就会失效
    // 使用失效的Token再去请求一些接口，接口就会报403状态码错误，需要我们做额外处理
    // 403 token 失效处理
    // 1. 清除本地用户数据
    // 2. 跳转到登录页
    if (e.response.data.code === "H403") {
      localStorage.clear();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);
export default httpInstance;
