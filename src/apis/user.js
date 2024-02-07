import request from "@/utils/http";
/* 
    登录
    POST方法 data传参
*/
export const loginAPI = (data) => {
  return request({
    url: "/auth/user/login",
    method: "POST",
    data,
  });
};

/* 
    获取短信验证码
*/
export const getMsgCodeAPI = () => {
  return request.get("api/verifyCode/getMsgCode");
};

/* 
    注册
*/
export const registerAPI = (data) => {
  return request({
    url: "/auth/user/register",
    method: "POST",
    data,
  });
};
