import request from '@/utils/http'
/* 
  加入购物车
*/
export const addCartAPI = (data) => {
  return request({
    url: 'auth/cart/addCart',
    method: 'POST',
    data
  })
}

/* 
  根据用户id获取购物车列表
*/
export const getCartListAPI = (params) => {
  return request({
    url: `/auth/cart/getCartByUid?userId=${params}`,
    method: 'GET'
  })
}