<template>
  <div class="nav-menu">
    <div class="blur-bg" style="background-image: url(&quot;//i0.hdslb.com/bfs/archive/30d45ce269948eae8ed650e5ce03a2ca463a5d77.png&quot;);">
    </div>
    <div class="nav-mask"></div>
    <div class="bili-wrapper clearfix">
        <div class="nav-con fl">
            <ul>
                <li class="nav-item home">
                    <a href="//www.bilibili.com" class="t" title="主站">主站</a>
                    <i class="bili-icon"></i>
                </li>
                <li class="nav-item hbili">
                    <a href="//h.bilibili.com" target="_blank" title="画友" class="t">画友</a>
                </li> 
                <li class="nav-item game">
                    <a href="//www.bilibili.com/audio/home/?type=10" target="_blank" title="来探索bilibili音乐的世界吧~" class="t">音频</a>
                </li>    
                <li class="nav-item live">
                    <a href="//game.bilibili.com" target="_blank" title="游戏中心" class="t">游戏中心</a>
                </li>           
                <li class="nav-item buy">
                    <a href="//live.bilibili.com" target="_blank" title="直播" class="t">直播</a>
                </li>    
                <li class="nav-item moe">
                    <a href="//show.bilibili.com/platform/home.html?msource=pc_web" target="_blank" title="会员购" class="t">会员购</a>
                </li>       
                <li class="nav-item mobile">
                    <i class="b-icon b-icon-app"></i>
                    <a id="header-mobile-app" href="//app.bilibili.com" target="_blank" title="下载APP" class="t">下载APP</a>
                </li>                                    
            </ul>
        </div>
        <div class="up-load fr" @mouseenter="isShowPostMenu = !isShowPostMenu" @mouseleave="isShowPostMenu = !isShowPostMenu">
            <a href="//member.bilibili.com/v/video/submit.html" target="_blank" class="u-link" >投 稿</a>
            <post-nav v-show="isShowPostMenu"></post-nav>
        </div>
        <nav-log class="nav-con fr"></nav-log> 
    </div>
  </div>    
</template>
<script>
    import NavLog from 'components/header/nav-log'
    import PostNav from 'components/header/post-nav'
    export default {
        data () {
            return {
                isShowPostMenu: false
            }
        },
        components: {
            NavLog,
            PostNav
        }
    }
</script>
<style>
.nav-menu {
    position: relative;
    z-index: 200;
    height: 42px;
    color: #222;    
}
.nav-menu .blur-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center -10px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);    
}
.nav-menu .nav-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,100%,.4);
    -webkit-box-shadow: rgba(0,0,0,.1) 0 1px 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);    
}
.nav-menu .bili-wrapper {
    width: 980px;
    margin: 0 auto;
}
.clearfix:after,.clearfix:before {
    content:"";
    display:table
}
.clearfix:after {
    clear:both;
    overflow:hidden
}
.clearfix {
    zoom:1
}
.nav-menu .bili-wrapper .fl {
    float: left;
    display: inline;
}
.nav-menu .nav-con .nav-item.home{
    margin-left: -10px;
    padding-left: 12px;
}
.nav-menu .nav-con .nav-item {
    float: left;
    text-align: center;
    line-height: 42px;
    height: 42px;
    position: relative;
    background-color: hsla(0,0%,100%,0);
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.nav-menu .nav-con .nav-item:hover {
    background-color: hsla(0,0%,100%,.3);
}
.nav-menu .nav-con .nav-item.home a {
    padding-left: 20px;
}
.t {
    color: #222;
    height: 100%;
    display: block;
    padding: 0 8px;
    padding-left: 8px;
}
.nav-menu .nav-con .nav-item.home i {
    position: absolute;
    width: 17px;
    height: 14px;
    left: 10px;
    top: 12px;
    background-position: -919px -88px;
}
.nav-menu .bili-icon {
    display: inline-block;
    background-image: url(../../assets/images/icons.png);
}
.nav-menu .b-icon {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    background: url(//static.hdslb.com/images/base/icons.png) no-repeat;
        background-position-x: 0%;
        background-position-y: 0%;
}
.nav-menu .b-icon.b-icon-app {
    background-position: -1371px -1175px;
    width: 16px;
    height: 21px;
    display: inline-block;
    vertical-align: middle;
}
.nav-menu .nav-con .nav-item.mobile a {
    display: inline-block;
    padding: 0;
}
.nav-menu .fr {
    float: right;
    /* display: inline; */
}
.nav-menu .up-load {
    position: relative;
    width: 58px;
    height: 42px;
    margin-left: 8px;
}
.nav-menu .up-load .u-link {
    display: block;
    width: 100%;
    height: 48px;
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #fb7299;
    border-radius: 0 0 6px 6px;
}
.nav-menu .up-load .u-link:hover {
    background-color: #ff85ad;
}
</style>
