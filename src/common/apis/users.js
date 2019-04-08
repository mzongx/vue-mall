import http from './http'

// 登录
export const login = params => http('post', '/users/login', params)

// 登出
export const logout = () => http('post', '/users/logout')

// 检查是否登录,原理就是服务器有没有获取到cookies中的userId
export const checkLogin = () => http('get', '/users/checkLogin')

// 获取用户地址
export const getAddress = () => http('get', '/users/address')

// 设置用户默认地址
export const setdefault = params => http('post', '/users/setdefault', params)

// 生成订单
export const setPayment = params => http('post', '/users/payment', params)

// 获取成功订单
export const ordersuccess = params => http('get', '/users/ordersuccess', params)

// 获取购物车数量
export const cartcount = () => http('get', '/users/cartcount')

// 生成订单后删除购物车
export const checkoutCart = () => http('get', '/users/checkout_cart')
