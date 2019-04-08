<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif" />
    <p class="des">{{ title }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
  @import '~@/common/stylus/variable'
  .loading
    padding 10px
    text-align center
    .des
      line-height 20px
      color $color-text-l
      font-size $font-size-small
</style>
