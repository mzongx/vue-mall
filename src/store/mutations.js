// mutations用来修改state
import * as types from './mutation-types'

const mutations = {
  // 设置昵称
  [types.SET_NIKENAME] (state, nikeName) {
    state.nikeName = nikeName
  },
  // 设置购物车数量
  [types.SET_CART] (state, num) {
    state.cartCount = num
  },
  // 添加或减少购物车数量
  [types.UPDATE_CART] (state, num) {
    state.cartCount += num
  },
  // 设置购物车列表
  [types.SET_CART_LIST] (state, cartList) {
    state.cartList = cartList
  }
}

export default mutations
