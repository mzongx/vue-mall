<template>
  <div id="app">
    <app-header></app-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <app-footer></app-footer>
  </div>
</template>
<script type="text/ecmascript-6">
import AppHeader from '@/components/app-header/app-header'
import AppFooter from '@/components/app-footer/app-footer'
export default {
  data () {
    return {

    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="stylus">

</style>
