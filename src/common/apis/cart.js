import http from './http'

// 添加购物车
export const addCart = params => http('post', '/goods/addcart', params)

// 获取购物车列表
export const getCartList = () => http('get', '/users/cartList')

// 删除商品
export const deleteCart = params => http('post', '/users/cart/del', params)

// 编辑商品
export const edit = params => http('post', '/users/cart/edit', params)

// 编辑商品
export const checkedall = params => http('post', '/users/cart/checkedall', params)
