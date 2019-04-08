/**
* goods接口，用来实现获取商品列表
*/
import http from './http'

export const getGoods = params => http('get', '/goods/list', params)
