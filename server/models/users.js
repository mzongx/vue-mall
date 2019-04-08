const mongoose = require('mongoose')
const Schema = mongoose.Schema

let usersSchema = new Schema({
  'userId': String,
  'userName': String,
  'userPwd': String,
  'orderList': Array,
  'cartList': [
    {
      'productId': String,
      'productName': String,
      'productNum': Number,
      'checked': String,
      'productImage': String,
      'salePrice': String
    }
  ],
  'addressList': [
    {
      'addressId': String,
      'userName': String,
      'streetName': String,
      'postCode': String,
      'tel': String,
      'isDefault': Boolean
    }
  ]
})

module.exports = mongoose.model('User', usersSchema)
