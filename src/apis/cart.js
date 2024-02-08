import request from '@/utils/http'
export const addCartAPI = (data) => {
  return request({
    url: 'auth/cart/addCart',
    method: 'POST',
    data
  })
}