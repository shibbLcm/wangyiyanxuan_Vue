<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
  export default {
    mounted(){

    },
    components: {
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #e9e9e9
    >div>div
      background-color white
</style>
