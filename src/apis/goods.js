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

/* 
    根据父级分类获取商品列表
*/
export const getGoodsByParentType = (parentType) => {
  return request({
    url: `api/goods/getGoodsByParentType?parentType=${parentType}`,
    method: "GET"
  });
};
