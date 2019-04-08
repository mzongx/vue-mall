const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Goods = require('../models/goods')
const Users = require('../models/users')

// 链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/mall')

// 已连接
mongoose.connection.on('connected', () => {
  console.log('mongodb connected success')
})

// 链接错误
mongoose.connection.on('error', () => {
  console.log('mongodb connected fail')
})

// 断开链接
mongoose.connection.on('disconnected', () => {
  console.log('mongodb connected disconnected')
})

// 获取商品api
router.get('/list', (req, res, next) => {
  // 获取页数
  let page = parseInt(req.query.page)
  // 获取每页数量
  let pageSize = parseInt(req.query.pageSize)
  // 跳过几个
  let skip = (page - 1) * pageSize
  // 排序 1升序，-1降序
  let sort = req.query.sort
  // 数据库查询参数
  let params = {}
  // 过滤价格
  let priceLabel = req.query.priceLabel
  let priceGt,
    priceLt
  if (priceLabel !== 'all') {
    switch (priceLabel) {
      case '0':
        priceGt = 0
        priceLt = 100
        break
      case '1':
        priceGt = 100
        priceLt = 500
        break
      case '2':
        priceGt = 500
        priceLt = 1000
        break
      case '3':
        priceGt = 1000
        priceLt = 5000
        break
      default:
        break
    }
    params = {
      'salePrice': {
        $gte: priceGt,
        $lte: priceLt
      }
    }
  }
  // skip跟limit是分页用
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize)
  // 排序
  goodsModel.sort({ 'salePrice': sort })
  goodsModel.exec((err, doc) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})

// 加入购物车
router.post('/addCart', (req, res, next) => {
  // 假设用户已登陆
  let userId = '100000077'
  let productId = req.body.productId
  // 根据userId去数据集合查找Users里面是否有用户
  let usersPromsie = () => {
    return new Promise((resolve, reject) => {
      Users.findOne({
        userId: userId
      }, (err, doc) => {
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }
  // 查找商品
  let goodsPromise = () => {
    return new Promise((resolve, reject) => {
      Goods.findOne({ productId: productId }, (err, doc) => {
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }
  // 保存商品
  let usersSave = (userdoc) => {
    return new Promise((resolve, reject) => {
      userdoc.save((err, doc) => {
        // 保存插入的数据
        if (err) {
          reject(err)
        } else {
          resolve(doc)
        }
      })
    })
  }
  usersPromsie().then((userdoc) => {
    // 匹配到用户后，根据produceid去查找goods里面的数据
    if (userdoc) {
      goodsPromise().then((goodsdoc) => {
        if (goodsdoc) {
          // 如果购物车有了，则添加数量
          let hasGoodsItem = ''
          userdoc.cartList.forEach((item) => {
            if (item.productId === productId) {
              hasGoodsItem = item
              item.productNum++
            }
          })
          if (hasGoodsItem) {
            usersSave(userdoc).then(() => {
              res.json({
                status: '0',
                msg: '',
                result: 'success'
              })
            }).catch((err) => {
              res.json({
                status: '1',
                msg: err.message
              })
            })
          } else {
            // 购物车没有，则新加一条
            // 找到后就向users集合中的cartList添加商品
            goodsdoc.productNum = 1
            goodsdoc.checked = 1
            userdoc.cartList.push(goodsdoc)
            usersSave(userdoc).then(() => {
              res.json({
                status: '0',
                msg: '',
                result: 'success'
              })
            }).catch((err) => {
              res.json({
                status: '1',
                msg: err.message
              })
            })
          }
        }
      }).catch((err) => {
        // 查找错误
        res.json({
          status: '1',
          msg: err.message
        })
      })
    }
  }).catch((err) => {
    // 查找错误
    res.json({
      status: '1',
      msg: err.message
    })
  })
})

module.exports = router
