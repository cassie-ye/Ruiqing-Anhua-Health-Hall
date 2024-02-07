import request from "@/utils/http";
/* 
    获取商品列表
    POST方法 data传参
*/
export const loginAPI = (data) => {
  return request({
    url: "/auth/user/login",
    method: "POST",
    data,
  });
};