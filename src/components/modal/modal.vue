<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" :class="{'md-show': show}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click.stop="hideModal">Close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="show" @click.stop="hideModal"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showModal () {
      this.show = true
    },
    hideModal () {
      this.show = false
      this.$emit('hideModal')
    }
  }
}
</script>

<style scoped lang="stylus">
// @import '~@/common/stylus/modal.styl'
</style>
