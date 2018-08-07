<template>
    <ul>
        <li class="nav-item profile-info"  @mouseover="isLogShow = !isLogShow" @mouseout="isLogShow = !isLogShow">
            <a href="//passport.bilibili.com/login" class="t">
                <div class="i-face">
                    <img src="//static.hdslb.com/images/akari.jpg" class="face">
                </div>
            </a>
            <transition name="logo">
                <div class="i_menu i_menu_login" v-show='isLogShow'>
                    <p class="tip">登录后你可以：</p>
                    <div class="img">
                        <img src="//static.hdslb.com/images/danmu.png" ref='img1'>
                        <img src="//static.hdslb.com/images/danmu.png" ref='img2'>
                    </div>
                    <a href="//passport.bilibili.com/login" class="login-btn">登录</a>
                    <p class="reg">首次使用？<a href="//passport.bilibili.com/register/phone.html">点我去注册</a></p>
                </div>                     
            </transition>
        </li>
            <li report-id="playpage_history" class="nav-item">
                <a href="//www.bilibili.com/account/history" target="_blank" class="t">历史</a>
            </li>
    </ul> 
</template>
<script>
export default {
    data: function () {
        return {
            isLogShow: false
        }
    },

}
</script>
<style lang="stylus" scoped>

    @keyframes slide 
        from
            margin-left 320px
        to
            margin-left -320px 
    @keyframes slide1 
        from
            margin-left 500px
        to
            margin-left -320px    
    .profile-info
        width 58px
        .i-face
            position absolute
            z-index 20
            width 36px
            height 36px
            left 11px
            top 0
            -webkit-transition .3s
            -o-transition .3s
            transition .3s
            .face
                border 0 solid #fff
                width 100%
                height 100%
                border-radius 50%
      
        .i_menu_login
            background #fff
            left 50%
            margin-left -130px
            width 260px
            padding-bottom 0
            padding-top 50px
            border-top none
            width 320px
            margin-left -160px
            padding 12px
            text-align left
            line-height: normal
            border 1px solid #e5e9ef 
            .tip
                font-size 12px       
                color #6d757a
            .img
                width 320px
                height 200px
                margin 12px 0
                overflow hidden
                position relative
                background url(//static.hdslb.com/images/base/danmu.png) no-repeat 50%
                img
                    position absolute 
                    top 0
                    left 0
                img:nth-child(1)
                    animation slide 10s linear infinite
                img:nth-child(2)
                    animation slide1 12.8125s linear infinite
            .login-btn
                display block
                height 43px
                line-height 43px
                text-align center
                background #00a1d6
                border-radius 4px
                font-size 14px
                color #fff
                &:hover
                    background #00b5e5
            .reg
                margin-top 8px
                text-align c
                        color #00b5e5enter
                font-size 12
                        color #00b5e5px
                color #28282
                        color #00b5e58
                a
                        color #00b5e5
                    color #0
                        color #00b5e50a1d6
                    &:hover
                        color #00b5e5
</style>
