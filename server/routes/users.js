const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const config = require('./config')
require('../util/util')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a users')
})

// 登录接口
router.post('/login', (req, res, next) => {
  // 获取前端页面传过来的用户名密码
  let params = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }

  // 根据获取到都params，去查询数据库
  let usersFind = (params) => {
    return new Promise((resolve, reject) => {
      Users.findOne(params, (err, doc) => {
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }
  usersFind(params).then((doc) => {
    if (doc) {
      // 找到用户
      // 写入cookie,主要用来判断用户刷新不丢失信息
      res.cookie('userId', doc.userId, {
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      res.cookie('userName', doc.userName, {
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      res.json({
        status: '0',
        result: doc.userName,
        msg: '登录成功'
      })
    } else {
      // 找不到用户，doc === null
      res.json({
        status: '1',
        msg: '用户名密码错误'
      })
    }
  }).catch((err) => {
    // 接口报错
    res.json({
      status: '1',
      msg: err.message
    })
  })
})

// 登出接口
router.post('/logout', (req, res, next) => {
  // 写入cookie
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  })
  res.cookie('userName', '', {
    path: '/',
    maxAge: -1
  })

  res.json({
    status: '0',
    msg: '登出成功'
  })
})

// 校验是否登录
router.get('/checkLogin', (req, res, next) => {
  let userId = req.cookies.userId
  let userName = req.cookies.userName
  if (userId) {
    res.json({
      status: '0',
      msg: '已登陆',
      result: userName
    })
  } else {
    res.json({
      status: '1',
      msg: '未登陆',
      result: ''
    })
  }
})

// 购物车列表
router.get('/cartList', (req, res, next) => {
  // 首先判断是否登录，拿到userId才能去查找数据库
  let userId = req.cookies.userId
  findUser(userId).then((doc) => {
    if (doc) {
      res.json({
        status: '0',
        msg: 'success',
        result: doc.cartList
      })
    }
  }).catch((err) => {
    res.json({
      status: '1',
      msg: err.message,
      result: ''
    })
  })
})

let findUser = (userId) => {
  let params = {
    userId
  }
  return new Promise((resolve, reject) => {
    Users.findOne(params, (err, doc) => {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}

// 购物车删除商品
router.post('/cart/del', (req, res, next) => {
  let userId = req.cookies.userId
  let productId = req.body.productId
  // 通过$pull可以查询删除user中的cartList
  Users.update({
    userId: userId
  }, {
    $pull: {
      'cartList': {
        productId: productId
      }
    }
  }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: 'success',
        result: ''
      })
    }
  })
})

// 购物车商品编辑--修改数量，选中
router.post('/cart/edit', (req, res, next) => {
  let userId = req.cookies.userId
  let productId = req.body.productId
  let productNum = req.body.productNum
  let checked = req.body.checked
  // 首先查找用户-->再查找二级列表的cartList-->再查找子列表中的num，$为占位符
  Users.update({ userId: userId, 'cartList.productId': productId }, {
    'cartList.$.productNum': productNum,
    'cartList.$.checked': checked
  }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '更新成功',
          result: ''
        })
      }
    }
  })
})

// 购物车商品全选
router.post('/cart/checkedall', (req, res, next) => {
  let userId = req.cookies.userId
  let checked = req.body.checked
  findUser(userId).then((user) => {
    if (user) {
      user.cartList.forEach((item) => {
        item.checked = checked
      })
      user.save((err, doc) => {
        if (err) {
          res.json({
            status: '1',
            msg: err.message,
            result: ''
          })
        } else {
          res.json({
            status: '0',
            msg: 'success',
            result: ''
          })
        }
      })
    }
  }).catch((err) => {
    res.json({
      status: '1',
      msg: err.message,
      result: ''
    })
  })
})

// 获取用户地址列表
router.get('/address', (req, res, next) => {
  let userId = req.cookies.userId
  findUser(userId).then((user) => {
    if (user) {
      res.json({
        status: '0',
        msg: 'success',
        result: user.addressList
      })
    }
  }).catch((err) => {
    res.json({
      status: '1',
      err: err.message,
      result: ''
    })
  })
})

// 设置用户默认地址
router.post('/setdefault', (req, res, next) => {
  let userId = req.cookies.userId
  let addressId = req.body.addressId
  findUser(userId).then((user) => {
    if (user) {
      user.addressList.forEach((item) => {
        if (item.addressId === addressId) {
          item.isDefault = true
        } else {
          item.isDefault = false
        }
      })
      user.save((err, doc) => {
        if (err) {
          config.errJson(res, err)
        } else {
          config.okJson(res)
        }
      })
    }
  }).catch((err) => {
    res.json({
      status: '0',
      msg: err.message,
      result: ''
    })
  })
})

// 生成订单
router.post('/payment', (req, res, next) => {
  let userId = req.cookies.userId
  let addressId = req.body.addressId
  let orderTotal = req.body.orderTotal
  findUser(userId).then((user) => {
    if (user) {
      let addressInfo = {}
      user.addressList.forEach(item => {
        if (item.addressId === addressId) {
          addressInfo = item
        }
      })

      let goodsList = []
      user.cartList.forEach(item => {
        if (item.checked === '1') {
          goodsList.push(item)
        }
      })
      let s1 = Math.floor(Math.random() * 10)
      let s2 = Math.floor(Math.random() * 10)
      let orderTit = '622'
      let orderId = orderTit + s1 + new Date().Format('yyyyMMddhhmmss') + s2
      let date = new Date().Format('yyyy-MM-dd hh:mm:ss')
      let order = {
        orderId,
        orderTotal,
        addressInfo,
        goodsList,
        orderStatus: '1',
        createDate: date
      }
      user.orderList.push(order)
      user.save((err, doc) => {
        if (err) {
          config.errJson(res, err)
        } else {
          config.okJson(res, 'success', {
            orderId: order.orderId,
            orderTotal: order.orderTotal
          })
        }
      })
    }
  }).catch((err) => {
    config.errJson(res, err)
  })
})

// 清空购物车
router.get('/checkout_cart', (req, res, next) => {
  let userId = req.cookies.userId
  findUser(userId).then((user) => {
    if (user) {
      let cartList = user.cartList
      let len = cartList.length
      // 有些购物车是有的，但是没选中，所以要把选中的购物车给清理掉
      while (len--) {
        if (cartList[len].checked === '1') {
          cartList.splice(len, 1)
        }
      }
      user.save((err, doc) => {
        if (err) {
          config.errJson(res, err)
        } else {
          config.okJson(res, 'success')
        }
      })
    }
  }).catch((err) => {
    config.errJson(res, err)
  })
})

// 获取购物车数量
router.get('/cartcount', (req, res, next) => {
  let userId = req.cookies.userId
  findUser(userId).then((user) => {
    if (user) {
      let cartList = user.cartList
      let cartCount = 0
      cartList.map(item => {
        if (item.checked === '1') {
          cartCount += item.productNum
        }
      })
      config.okJson(res, 'success', {
        cartCount
      })
    }
  }).catch((err) => {
    config.errJson(res, err)
  })
})

// 订单成功
router.get('/ordersuccess', (req, res, next) => {
  let userId = req.cookies.userId
  let orderId = req.query.orderId
  findUser(userId).then((user) => {
    let totalPrice = 0
    if (user.orderList.length > 0) {
      user.orderList.forEach(item => {
        if (item.orderId === orderId) {
          item.goodsList.forEach(good => {
            totalPrice += good.productNum * good.salePrice
          })
        }
      })
      config.okJson(res, '查询成功', {
        orderId,
        totalPrice
      })
    } else {
      res.json({
        status: '1',
        msg: '查无订单',
        result: ''
      })
    }
  }).catch((err) => {
    config.errJson(res, err)
  })
})

module.exports = router
