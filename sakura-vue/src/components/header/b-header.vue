<template>
  <div>
    <nav-menu></nav-menu>
    <div class="header">
        <div class="header-layer"></div>
        <a class="header-link" target="_blank" href="http://www.bilibili.com" data-loc-id="142"></a>
        <div class="h-center">
            <a href="/" class="logo" style="background-image: url('//i0.hdslb.com/bfs/archive/6063fb40e90a17912b71d2cfd4ea56f69abb70de.png');"></a>
            <div class="banner-title">哔哩哔哩 (゜-゜)つロ 干杯~</div>
        <b-search></b-search>
        </div>
        <b-menu></b-menu>
    </div>
  </div>

</template>

<script>
import NavMenu from 'components/header/nav-menu'
import BSearch from 'components/header/b-search'
import BMenu from 'components/header/b-menu'
export default {
  components: {
      NavMenu,
    	BSearch,
    	BMenu
  }
}
</script>

<style lang="stylus">
 .header
    background transparent no-repeat center -10px
    background-image url(../../assets/images/headersbackground.png)
    position relative
    margin -42px auto 0
    .header-layer
    	height 170px
      position absolute
      top 0px
      left 0px
      width 100%
      z-index 10
    .header-link
    	position absolute
    	top 0px
    	left 0px
    	width 100%
    	height 170px
    	z-index 10
    .h-center
    	width 960px
    	margin 0 auto
    	position relative
    	height 170px
    	transition .2s height
    	.logo
    		position absolute
    		width 220px
    		height 105px
    		left 24px
    		top 55px
    		background transparent no-repeat left center
    		z-index 100
    	.banner-title
    		position absolute
    		top 114px
    		left 255px
    		line-height 20px
    		padding 6px 10px
    		background-color rgba(0, 0, 0, 0.68)
    		color #fff
    		border-radius 4px
    		font-size 14px
    		max-width 350px
    		transition .2s
</style>
