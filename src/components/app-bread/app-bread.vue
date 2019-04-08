<template>
  <section class="bread">
    <div class="bread-wrap">
      <nav class="">
        <router-link to="/">Home</router-link>
        <slot></slot>
      </nav>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
  @import '~@/common/stylus/variable.styl'
  .bread
    max-width: 1280px;
    margin: 0 auto;
    height: 45px;
    line-height: 45px;
    background-color: #f0f0f0;
    .bread-wrap
      padding: 0 10px;
      font-size: 14px;
      color: #a1a1a1;
      a
        position: relative;
        margin-right: 20px;
        &:after
          position: absolute;
          top: 0px;
          right -12px;
          content:'/';
          height:20px;
          line-height: 20px;
      span
        color: $color-theme;
</style>
