// axios基础的封装
import axios from "axios";
// 由于useRouter只能在组件内使用，因此如果想在独立的js文件或ts文件不能使用useRouter 获取
const httpInstance = axios.create({
  baseURL: "http://127.0.0.1:8801/health",
  timeout: 5000
});
// 拦截器
httpInstance.interceptors.request.use(
  config => {
    // const userStore = useUserStore();
    // const token = userStore.userInfo.token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  e => Promise.reject(e)
);
// axios响应拦截器
httpInstance.interceptors.response.use(
  res => res.data,
  e => {
    // const userStore = useUserStore();
    // console.log(e);
    // ElMessage({
    //   type: "warning",
    //   message: e.response.data.message
    // });
    // Token的有效性可以保持一定时间 如果用户一段时间不做任何操作，Token就会失效
    // 使用失效的Token再去请求一些接口，接口就会报401状态码错误，需要我们做额外处理
    // 401 token 失效处理
    // 1. 清除本地用户数据
    // 2. 跳转到登录页
    // if (e.response.status === 401) {
    //   userStore.clearUserInfo();
    //   router.push("/login");
    // }
    return Promise.reject(e);
  }
);
export default httpInstance;
