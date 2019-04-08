const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 通过schema定义表结构
let productSchema = new Schema({
  'productId': String,
  'productName': String,
  'salePrice': Number,
  'checked': String,
  'productNum': Number,
  'productImage': String
})

// 这个Goods会自动去查找数据库mall的goods集合
module.exports = mongoose.model('Good', productSchema)
