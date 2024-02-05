import request from "@/utils/http";
/* 
    获取商品列表
    POST方法 data传参
*/
export const getGoodsListAPI = (data) => {
  return request({
    url: "/api/goods/getGoodsList",
    method: "POST",
    data,
  });
};
