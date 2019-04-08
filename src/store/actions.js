// 封装mutation，异步执行也在这里
import * as types from './mutation-types'
import { checkoutCart } from 'common/apis/users'
// 生成订单的时候清空购物车
export function checkout ({ commit, state }) {
  // 保存购物车数量
  let saveCartCount = state.cartCount
  checkoutCart().then((res) => {
    // 成功-清空购物车
    if (res.data.status === '0') {
      commit(types.SET_CART, 0)
    }
  }).catch(() => {
    // 失败-还原购物车
    commit(types.SET_CART, saveCartCount)
  })
}
