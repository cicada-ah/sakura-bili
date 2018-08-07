<template>
  <div id="app">
    <bili-header></bili-header>
    <bili-content :content="content"></bili-content>  
    <b-nav :content="content" @change="mask"></b-nav>
    <div class="ele-mask" v-show="isShow"></div>
  </div>
</template>

<script>
import BiliHeader from 'components/header/b-header'
import BiliContent from 'components/content/b-content'
import BNav from 'components/nav/b-nav'

import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      isShow: false
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'content'
    ]), 

  }, 
  methods: {
    mask() {
      this.isShow = !this.isShow
    }
  },
  mounted() {
    this.$store.dispatch('getContent')
  },
  components: {
    BiliHeader,
    BiliContent,
    BNav
  },  
}
</script>

<style lang="stylus">
  #app 
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
    -webkit-font-smoothing antialiased
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
    .ele-mask
      position fixed
      width 100%
      height 150%
      background-color #000
      opacity .5!important
      z-index 1000
      top 0px
      left 0px
      transition .2s
    .clearfix:after,.clearfix:before
      content ""
      display table
    .clearfix:after
      clear both
      overflow hidden
    .clearfix
      zoom 1
</style>
