<template>
  <div>
    <app-bread>
      <span>Goods</span>
    </app-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="setSort">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a
          href="javascript:void(0)"
          class="filterby stopPop"
          @click="showFilter">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" :class="{'filterby-show': filterShow}" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a
                href="javascript:void(0)"
                :class="{'cur': priceChecked === 'all'}"
                @click="setFilter('all')">
                  All
                </a>
              </dd>
              <dd v-for="(item, index) in priceFilter" :key="index">
                <a
                href="javascript:void(0)"
                @click="setFilter(index)"
                :class="{'cur': priceChecked === index}"
                >{{ item.startPrice }} - {{ item.endPrice }}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(goods, index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+goods.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ goods.productName }}</div>
                    <div class="price">{{ goods.salePrice }}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="showModal(goods.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                <loading v-show="loading && !dataError" title="加载中"></loading>
              </div>
              <p v-if="dataError">数据加载失败，请检查网络并刷新页面！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
    class="mask"
    :class="{'show-mask': filterShow}"
    @click="hideFilter"></div>
    <modal ref="modal">
      <div slot="message">是否加入购物车</div>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn cancel" @click.stop="hideModal">取消</a>
        <a href="javascript:;" class="btn" @click.stop="addCart">确定</a>
      </div>
    </modal>
    <modal ref="modalAlert">
      <div slot="message">加入成功</div>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn" @click.stop="hideAlert">确定</a>
      </div>
    </modal>
  </div>
</template>
<script>
import appBread from '@/components/app-bread/app-bread'
import loading from '@/components/loading/loading'
import modal from '@/components/modal/modal'
import { getGoods } from 'common/apis/goods'
import { addCart } from 'common/apis/cart'
import { to } from 'common/apis/config'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      goodsList: [],
      priceChecked: 'all',
      priceFilter: [
        {
          startPrice: 0,
          endPrice: 100
        },
        {
          startPrice: 100,
          endPrice: 500
        },
        {
          startPrice: 500,
          endPrice: 1000
        },
        {
          startPrice: 1000,
          endPrice: 5000
        }
      ],
      filterShow: false,
      page: 1,
      pageSize: 8,
      sort: true,
      busy: false,
      loading: false,
      dataError: false, // 网络出错
      checkProductId: ''
    }
  },
  created () {
    this._getGoodsList()
  },
  components: {
    appBread,
    loading,
    modal
  },
  methods: {
    ...mapMutations({
      update_cart: 'UPDATE_CART'
    }),
    async _getGoodsList (flag) {
      let params = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sort ? 1 : -1,
        priceLabel: this.priceChecked
      }
      this.loading = true
      // 等待getGoods执行完
      // goods商品列表信息会返回给goodsInfo
      // 若成功，则goodsInfo == {status: 200, statusText: 'statusText', data: { token: xxx }}
      let [ err, goodsInfo ] = await to(getGoods(params))
      if (err) {
        // 网络错误
        this.dataError = true
        return
      }
      if (goodsInfo.status === 200) {
        let res = goodsInfo.data
        this.loading = false
        if (res.status === 0) {
          // 如果是滚动加载，则数据要concat
          if (flag) {
            this.goodsList = this.goodsList.concat(res.result.list)
            if (res.result.list.length === 0) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else {
            this.goodsList = res.result.list
            // 如果数据小于pagesize则代表全部加载完
            if (res.result.list.length < this.pageSize) {
              this.busy = true
              return
            }
            this.busy = false
          }
        } else {
          this.goodsList = []
        }
      }
    },
    async addCart () {
      let params = {
        productId: this.checkProductId
      }

      let resCart = await addCart(params)
      if (resCart.data.status === '0') {
        // alert('加入成功')
        this.showAlert()
        this.hideModal()
        this.update_cart(1)
      } else {
        alert('未登录')
      }
    },
    showModal (productId) {
      if (productId) {
        this.checkProductId = productId
      }
      this.$refs.modal.showModal()
    },
    hideModal () {
      this.$refs.modal.hideModal()
    },
    showAlert () {
      this.$refs.modalAlert.showModal()
    },
    hideAlert () {
      this.$refs.modalAlert.hideModal()
    },
    showFilter () {
      this.filterShow = true
    },
    hideFilter () {
      this.filterShow = false
    },
    setFilter (index) {
      if (index === 'all') {
        this.priceChecked = 'all'
      } else {
        this.priceChecked = index
      }
      this.page = 1
      this._getGoodsList()
      this.hideFilter()
    },
    setSort () {
      this.sort = !this.sort
      this.page = 1
      this._getGoodsList()
    },
    loadMore () {
      this.busy = true
      setTimeout(() => {
        this.page++
        this._getGoodsList(true)
      }, 500)
    }
  }
}
</script>
<style lang="stylus">
  @import '~@/common/stylus/variable.styl'
  .mask
    display: none;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background: $color-background-d;
    z-index: 1;
    &.show-mask
      display: block;
  .accessory-page
    .filter-nav
      height: 55px;
      font-size: $font-size-small
      line-height: 55px;
      margin: 60px 0 30px 0;
      padding: 0 20px;
      background: $color-highlight-background;
      text-align: right;
      overflow: hidden;
      .filterby
        display: none;
        letter-spacing: .25em;
        text-transform: uppercase;
        font-size: 12px;
      a
        margin: 0 10px;
        &.cur,&:hover
          color: #ee7a23;
      .icon-arrow-short
        width: 11px;
        height: 11px;
        // transform: rotate(180deg);
    .accessory-result
      display: flex;
      .filter
        width: 230px;
        margin-right: 25px;
        padding: 0 20px 0 20px;
        color: #605F5F;
        transition: right .5s ease-out;
        &.filterby-show
          right: 0;
          transition: right .5s ease-out;
        .filter-price
          min-height: 180px;
          margin-bottom: 50px;
          dt
            margin-bottom: 30px;
            font-family: "moderat", sans-serif;
            letter-spacing: .25em;
            text-transform: uppercase;
            font-weight: bold;
          dd
            line-height: 1.2em;
            margin: 20px 0;
            a
              display: block;
              padding: 5px 0;
              transition: padding-left .3s ease-out;
            a:hover
            .cur
              color: #ee7a23;
              padding-left: 15px;
              transition: padding-left .3s ease-out;
              border-left: 2px solid #ee7a23;
      .accessory-list-wrap
        flex: 1;
        .accessory-list
          ul
            &:after
              visibility: hidden;
              display: block;
              content: " ";
              clear: both;
            li
              float: left;
              width: 23.80952%;
              margin-right: 1.5873%;
              margin-bottom: 1.5873%;
              background: $color-highlight-background;
              border: 2px solid #e9e9e9;
              transition: all .5s ease-out;
              &:hover
                border-color: #ee7a23;
                transform: translateY(-5px);
                box-shadow: 0 0 10px #999;
                transition: all .5s ease-out;
              .pic
                overflow: hidden;
                a
                  display: block;
                  width: 100%;
                  height: 0;
                  padding-bottom: 100%;
                  img
                    width: 100%;
              .main
                padding: 20px 10px 10px 10px;
                .name
                  height: 4em;
                  line-height: 1.25em;
                  padding-bottom: 10px;
                  font-family: "moderat", sans-serif;
                  font-weight: bold;
                  overflow: hidden;
                .price
                  float: left;
                  line-height: 30px;
                  color: $color-theme;
                  font-size: 1.25em;
                .btn-area
                  clear: both;
                  padding-top: 10px;
                  .btn
                    width: 100%;
          &.col-4
            ul
              li
                width: 23.80952%;
                margin-right: 1.5873%;
                margin-bottom: 1.5873%;
                &:nth-child(4n)
                  margin-right: 0;
          &.col-5
            ul
              li
                width: 18.73016%;
                margin-right: 1.5873%;
                margin-bottom: 1.5873%;
  @media only screen and (max-width: 991px)
    .accessory-page
      .accessory-result
        .accessory-list-wrap
          .accessory-list
            .main
              .name
                font-size: 1.3rem;
              .btn-area
                .btn
                  font-size: 1.2rem;
            &.col-4
              ul
                li
                  width: 32.27513%;
                  margin-right: 1.5873%;
                  margin-bottom: 1.5873%;
                  &:nth-child(4n)
                    margin-right: 1.5873%;
                  &:nth-child(3n)
                    margin-right: 0;
            &.col-5
              ul
                li
                  width: 23.80952%;
                  margin-right: 1.5873%;
                  margin-bottom: 1.5873%;
                  &:nth-child(5n)
                    margin-right: 20px;
                  &:nth-child(4n)
                    margin-right: 0;
  @media only screen and (max-width: 767px)
    .accessory-page
      .search-result-wrap
        background: none;
        padding: 0 10px;
      .filter-nav
        margin: 0;
        padding: 0 10px;
        background: #f0f0f0;
        border-top: 1px solid #e9e9e9;
        text-align: left;
        &:after
          visibility: hidden;
          display: block;
          content: " ";
          clear: both;
        a
          float: left;
        .filterby
          display: block;
          float: right;
        .sortby
          display: none;
      .accessory-result
        .filter
          margin: 0;
          position: fixed;
          right: -230px;
          top: 0;
          z-index: 201;
          height: 100%;
          background: #fff;
          padding: 0;
          margin: 0;
          overflow: auto;
          .filter-price
            min-height: 0;
            margin: 0;
            dt
              background: #f0f0f0;
              height: 55px;
              line-height: 55px;
              margin: 0;
              padding-left: 20px;
            dd
              margin: 0;
              a
                padding: 12px 10px 12px 15px;
                border-bottom: 1px solid #e9e9e9;
        .accessory-list-wrap
          .accessory-list
            font-size: 1.2rem;
            &.col-4
              ul
                li
                  width: 100%;
                  margin-bottom: 10px;
                  padding: 10px;
                  border: none;
                  border-top: 1px solid #e9e9e9;
                  border-bottom: 1px solid #e9e9e9;
                  .pic
                    float: left;
                    width: 110px;
                    height: 110px;
                    border: 1px solid #e9e9e9;
                    a
                      display: block;
                      width: 100%;
                      height: 100%;
                      padding-bottom: 0;
                  .main
                    padding: 0 0 0 125px;
                    .name
                      height: auto;
                      min-height: 50px;
                    .price
                      float: none;
                    .btn-area
                      padding: 0;
                      clear: none;
                      float: right;
                      .btn
                        height: 30px;
                        line-height: 30px;
                        padding-left: .8em;
                        padding-right: .8em;
                        font-size: 1rem;
                        letter-spacing: .1em;
</style>
