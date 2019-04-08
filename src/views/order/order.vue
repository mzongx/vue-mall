<template>
  <div>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 39 32">
          <title>ok</title>
          <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
        </symbol>
        <symbol id="icon-delete" viewBox="0 0 26 32">
          <title>delete</title>
          <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
        </symbol>
      </defs>
    </svg>
    <app-bread>
      <span>order</span>
    </app-bread>
    <div class="container">
      <div class="checkout-order">
        <step step="1"></step>
        <!-- order list -->
        <div class="page-title-normal checkout-title">
          <h2><span>Order content</span></h2>
        </div>
        <div class="item-list-wrap confirm-item-list-wrap">
          <div class="cart-item order-item">
            <div class="cart-item-head">
              <ul>
                <li>Order contents</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="(item, index) in checkList" :key="index">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img :src="'/static/'+item.productImage" :alt="item.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{ item.productName }}</div>

                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{ item.salePrice | currency('¥') }}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self">
                      <div class="select-self-area">
                        <span class="select-ipt">×{{ item.productNum }}</span>
                      </div>
                    </div>
                    <div class="item-stock item-stock-no">In Stock</div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{ productTotalPrice(item.productNum, item.salePrice) | currency('¥') }} </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Price count -->
        <div class="price-count-wrap">
          <div class="price-count">
            <ul>
              <li>
                <span>Item subtotal:</span>
                <span>{{ totalPrice | currency('¥') }}</span>
              </li>
              <li>
                <span>Shipping:</span>
                <span>{{ shipping | currency('¥') }}</span>
              </li>
              <li>
                <span>Discount:</span>
                <span>{{ discount | currency('¥') }}</span>
              </li>
              <li>
                <span>Tax:</span>
                <span>{{ tax | currency('¥') }}</span>
              </li>
              <li class="order-total-price">
                <span>Order total:</span>
                <span>{{ resultPrice | currency('¥') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="order-foot-wrap">
          <div class="prev-btn-wrap">
            <router-link class="btn btn--m" tag="button" :to="{path: '/address'}">Previous</router-link>
          </div>
          <div class="next-btn-wrap">
            <button class="btn btn--m btn--red" @click="payment">Proceed to payment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import step from '@/components/step/step'
import appBread from '@/components/app-bread/app-bread'
import { getCartList } from 'common/apis/cart'
import { setPayment } from 'common/apis/users'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      cartList: [],
      shipping: 100,
      tax: 0,
      discount: 0
    }
  },
  created () {
    this._getCartList()
    if (!this.$route.query.addressId) {
      this.$router.push({ path: '/cart' })
    }
  },
  computed: {
    checkList () {
      return this.cartList.filter(item => {
        return item.checked === '1'
      })
    },
    totalPrice () {
      let price = 0
      this.checkList.forEach(item => {
        price += parseFloat(item.productNum) * parseFloat(item.salePrice)
      })
      return price
    },
    resultPrice () {
      return this.totalPrice + this.shipping + this.tax - this.discount
    }
  },
  methods: {
    ...mapActions({
      checkoutCart: 'checkout'
    }),
    async _getCartList () {
      let cartListRes = await getCartList()
      let data = cartListRes.data
      if (data.status === '0') {
        this.cartList = data.result
      } else {
        this.cartList = []
      }
    },
    async _setPayment (addressId, orderTotal) {
      let params = {
        addressId,
        orderTotal
      }

      let paymentRes = await setPayment(params)
      return paymentRes
    },
    productTotalPrice (productNum, salePrice) {
      return parseFloat(productNum) * parseFloat(salePrice)
    },
    payment () {
      // 生成订单
      let addressId = this.$route.query.addressId
      let orderTotal = this.resultPrice
      let res = this._setPayment(addressId, orderTotal)
      res.then((response) => {
        if (response.data.status === '0') {
          // 成功订单后删除购物车
          this.checkoutCart()
          this.$router.push({ path: 'order-confirm', query: { orderId: response.data.result.orderId } })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    step,
    appBread
  }
}
</script>

<style scoped lang="stylus">
  .checkout-order
    padding: 10px 0 50px 0;
    .item-list-wrap
      margin-bottom: 40px;
  .checkout-title h2
    padding: 20px 0;
    font-size: 16px;
    color: #605F5F;
  .redeem-coupon-wrap {
    padding-bottom: 40px; }
  .redeem-coupon-wrap .text-redeem {
    width: 380px;
    height: 40px;
    line-height: 40px;
    margin-right: 16px;
    padding-top: 0;
    padding-bottom: 0;
    vertical-align: top; }

  .apply-promotion-wrap {
    margin-bottom: 60px; }

  .price-count-wrap {
    margin-bottom: 20px; }

  .order-foot-wrap .prev-btn-wrap {
    float: left; }

  .order-foot-wrap .next-btn-wrap {
    float: right; }

  .order-foot-wrap:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both; }
  .checkout-order {
    padding: 0; }
  .cart-item {
    display: table;
    width: 100%; }

  .cart-item-head {
    display: table-header-group;
    width: 100%; }
  .cart-item-head ul {
    display: table-row;
    width: 100%; }
  .cart-item-head li {
    display: table-cell;
    height: 40px;
    line-height: 40px;
    background: #605F5F;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-family: "moderat", sans-serif;
    letter-spacing: .25em; }
  .cart-item-head li:nth-child(2), .cart-item-head li:nth-child(3), .cart-item-head li:nth-child(4), .cart-item-head li:nth-child(5) {
    /*width: 11%;*/
    padding: 0 10px; }

  .cart-item-list {
    display: table-row-group; }
  .cart-item-list > li {
    position: relative;
    display: table-row;
    padding: 32px 0;
    background: #fff; }
  .cart-item-list > li > div {
    position: relative;
    display: table-cell;
    text-align: center;
    vertical-align: top;
    border-bottom: 1px solid #e9e9e9;
    height: 100%; }
  .cart-item-list > li.disabled {
    background: #e9e9e9; }
  .cart-item-list > li.disabled .item-check-btn {
    background: #ccc; }
  .cart-item-list > li.disabled > div:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 5; }
  .cart-item-list > li.item-has-include .cart-item-title {
    display: block;
    min-height: 66px;
    padding-left: 160px; }
  .cart-item-list .cart-tab-1 {
    min-height: 72px;
    padding: 32px 0 32px 0;
    text-align: left;
    border-left: 1px solid #e9e9e9; }
  .cart-item-list .cart-tab-2 {
    padding-top: 64px; }
  .cart-item-list .cart-tab-3 {
    padding-top: 48px; }
  .cart-item-list .cart-tab-4 {
    padding-top: 64px; }
  .cart-item-list .cart-tab-5 {
    padding-top: 62px;
    border-right: 1px solid #e9e9e9; }
  .cart-item-list .cart-item-check {
    float: left;
    padding: 30px 0 0 20px; }
  .cart-item-list .cart-item-pic {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    border: 1px solid #e9e9e9;
    overflow: hidden; }
  .cart-item-list .cart-item-pic img {
    width: 100%; }
  .cart-item-list .cart-item-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 76px;
    padding: 0 20px 0 20px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; }
  .cart-item-list .cart-item-title .item-name {
    width: 100%;
    line-height: 76px;
    color: #000;
    font-family: "moderat", sans-serif;
    font-weight: bold; }
  .cart-item-list .cart-item-title .item-count-down {
    margin-top: 10px;
    font-size: 12px; }
  .cart-item-list .cart-item-title .item-count-down .icon-clock {
    width: 1em;
    height: 1em;
    fill: #605F5F;
    vertical-align: top; }
  .cart-item-list .cart-item-title .item-count-down .item-count-down-time {
    padding: 1px 5px 0 5px;
    background: #f0f0f0;
    color: #605F5F; }
  .cart-item-list .cart-item-title .item-count-down .item-count-down-tips {
    margin-top: 5px;
    color: #ee7a23; }
  .cart-item-list .item-include {
    position: relative;
    width: 96%;
    padding-left: 160px; }
  .cart-item-list .item-include dl {
    padding-right: 60px; }
  .cart-item-list .item-include dl dt {
    float: left;
    width: 4.5em; }
  .cart-item-list .item-include dl dd {
    margin-bottom: 13px;
    padding-left: 4.5em;
    color: #999; }
  .cart-item-list .item-include dl dd:last-child {
    margin-bottom: 0; }
  .cart-item-list .item-include dl:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both; }
  .cart-item-list .item-include .item-include-more {
    position: absolute;
    right: 10px;
    top: 0; }
  .cart-item-list .item-stock {
    margin-top: 5px;
    font-size: 12px;
    color: #999; }
  .cart-item-list .item-stock-no {
    color: #d1434a; }
  .cart-item-list .item-price {
    font-size: 16px;
    color: #333; }
  .cart-item-list .item-price-total {
    color: #d1434a;
    font-size: 16px; }
  .cart-item-list .item-edit-btn {
    position: relative;
    z-index: 6; }
  .cart-item-list .item-edit-btn:hover .icon {
    fill: #ee7a23; }
  .order-foot-wrap
    margin-bottom: 20px;
  .order-foot-wrap:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both; }
  .price-count ul {
    display: table;
    width: 100%; }

  .price-count li {
    display: table-row;
    font-size: 18px; }
  .price-count li span {
    display: table-cell;
    height: 36px;
    padding-right: 10px;
    vertical-align: top;
    text-align: right; }
  .price-count li span:first-child {
    color: #999; }
  .price-count li span:last-child {
    width: 20px;
    padding-left: 10px;
    white-space: nowrap; }

  .price-count .order-total-price span:last-child {
    color: #d1434a;
    font-size: 1.125em;
    font-weight: bold; }
  .select-self {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .select-self-area {
    width: auto;
    background: #f0f0f0;
    border-radius: 3px;
    min-width: 50px;
    max-width: 240px;
    height: 30px;
    line-height: 30px;
  }

  .select-self-area .select-ipt {
    display: block;
    min-width: 56px;
    height: 100%;
    padding: 0 25px 0 10px;
    border: 0;
    color: #605F5F;
    text-align: left;
    font-size: 16px;
    overflow: hidden;
  }

  .select-self-area .select-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 18px;
    height: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
  }

  .select-self-area .select-btn .i-up-down {
    width: 8px;
    top: 0;
    left: 0;
  }

  .select-self-area .select-btn .i-up-down i {
    width: 5px;
    height: 2px;
    background-color: #605F5F;
  }
  .order-item .select-self-area .select-ipt {
    padding: 0;
    text-align: center;
  }
</style>
