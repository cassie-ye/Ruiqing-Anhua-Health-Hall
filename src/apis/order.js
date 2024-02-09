import request from "@/utils/http";
/* 
    商品下单
    POST方法 data传参
*/
export const addShopOrderAPI = (data) => {
  return request({
    url: "/auth/order/addShopOrder",
    method: "POST",
    data,
  });
};

/* 
    根据用户id获取订单列表
*/
export const getOrderListByIdAPI = (userId) => {
  return request({
    url: `/auth/order/getOrderInfoByUserId?userId=${userId}`,
    method: "GET",
  });
};

/* 
    根据订单id删除订单
*/
export const deleteOrderByIdAPI = (orderId) => {
  return request({
    url: `/auth/order/deleteOrderById?id=${orderId}`,
    method: "DELETE",
  });
};
