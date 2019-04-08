<template>
  <div>
    <div class="page-title-normal">
      <h2 class="page-title-h2"><span>check out</span></h2>
    </div>
    <!-- process step -->
    <div class="check-step">
      <ul>
        <li :class="{'cur': index <= step}" v-for="(item, index) in stepList" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    step: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      stepList: ['Confirm address', 'View your order', 'Make payment', 'Order confirmation']
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
  @import '~common/stylus/variable.styl'
  .check-step
    padding: 30px 0 20px 0;
    ul
      display: flex;
      li
        position: relative;
        float: left;
        flex: 1;
        width: 25%;
        line-height: 1.25em;
        padding: 0 1em 1.25em 1em;
        border-bottom: 2px solid #ccc;
        color: $color-text-gray;
        text-align: center;
        font-weight: bold;
        text-transform: capitalize;
        &.cur
          border-color: $color-theme;
          color: $color-theme;
          &:after
            background: $color-theme;
        em
          color: $color-text-gray;
          font-size: .8em;
          font-weight: normal;
        &:after
          position: absolute;
          bottom: -7px;
          left: 50%;
          margin-left: -7px;
          content: "";
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ccc;
      &:after
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
  @media only screen and (max-width: 991px)
    .check-step
      padding: 20px 0;
      li
        font-size: 1.4rem;
  @media only screen and (max-width: 767px)
    .check-step
      padding: 20px 0 0 0;
      li
        font-size: 1.2rem;
        padding-left: 5px;
        padding-right: 5px;
</style>
