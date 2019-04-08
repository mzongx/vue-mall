// 初始化state,默认所有的state都要在这里初始化
// 用一个对象就包含了全部的应用层级状态，所有应用的状态都在这里定义
const state = {
  nikeName: '', // 用户昵称
  cartCount: 0, // 购物车数量
  cartList: [] // 购物车列表，在这定义，一旦用户超时重新登录的时候再去刷新一次请求
}

export default state
