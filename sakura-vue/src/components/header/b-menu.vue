<template>
	<div class="menu">
		<div class="menu-wrapper">
			<ul class="nav-menu">
				<b-menuItem  v-for="i in classify" :item="i" :key="i.title"></b-menuItem>
			</ul>
			<div class="menu-r">
				<a  href="http://search.bilibili.com/all?keyword=%E5%86%B0%E6%B7%87%E6%B7%8B&from_source=gif_recommend&spm_id_from=333.334.primary_menu.105" 
				class="random-p"
				target="_blank" title="冰淇淋">
					<img src="../../assets/images/navrandom-p.gif" alt="">
				</a>
			</div>
			<div class="menu-rm">
				<a id="mobile_p" class="mobile-p" href="//app.bilibili.com" target="_blank" @mouseover="showMobileLink=true" @mouseout="showMobileLink=false">
					<transition name="fade">
						<div class="mobile-p-box" v-show="showMobileLink">
							<div class="mobile-p-qrcode">
							</div>
						</div>					
					</transition>

				</a>
			</div>
		</div>
	</div>
</template>

<script>
import BMenuItem from 'components/header/b-menu-item'
export default {
	data() {
		return {
			showMobileLink: false,
			classify: [
				{
					title: '首页',
					num: 0,
					home: true
				},
				{
					title: '动画',
					num: 999+'+'
				},
				{
					title: '番剧',
					num: 140
				},
				{
					title: '音乐',
					num: 999+'+'
				},
				{
					title: '舞蹈',
					num: 99
				},
				{
					title: '游戏',
					num: 999+'+'
				},
				{
					title: '科技',
					num: 999+'+'
				},
				{
					title: '生活',
					num: 988
				},
				{
					title: '鬼畜',
					num: 64
				},
				{
					title: '时尚',
					num: 177
				},
				{
					title: '广告',
					num: 43
				},
				{
					title: '娱乐',
					num: 839
				},
				{
					title: '影视',
					num: 702
				}, 
				{
					title: '广场',
					num: 0,
					sequare: true
				},
				{
					title: '直播',
					num: 0,
					live: true
				}
			]
		}
	},
	components: {
		BMenuItem
	}
}
</script>

<style lang="stylus" scoped>
	.menu
		width 100%
		background #fff
		.menu-wrapper
			position relative
			width 980px
			margin 0 auto
			padding 6px 0
			z-index 100
			.nav-menu
				zoom 1
				display inline-block
				vertical-align top
				height 50px
			.menu-r
				position absolute
				right 0px
				top 0px
				height 50px
				padding 4px 0
				.random-p
					width 69px
					height 40px
					margin 3px 0
					display inline-block
					vertical-align top
					overflow hidden
					img
						display block
						max-width 100%
						height 100%
						boder-radius 3px
						margin 0 auto
			.menu-rm
				position absolute
				right 100px
				top 0px
				height 50px
				padding 4px 0			
				.mobile-p
					display inline-block
					vertical-align top
					margin 3px 0
					width 58px
					height 44px
					background url(../../assets/images/app-link.png) center center no-repeat
					position relative
					overflow visible
					.mobile-p-box
						position absolute
						overflow hidden
						top 44px
						width 259px
						height 174px
						right -20px
						background url(../../assets/images/app-box.png) center center no-repeat
						transition .2s
						transition-property opacity
						&.fade-enter-active, &.fade-leave
							opacity 1
						&.fade-enter, &.fade-leave-active
							opacity 0
						.mobile-p-qrcode
							position absolute
							top 30px
							width 100px
							height 100px
							left 80px
							background url(../../assets/images/app-qrcode.png) center center no-repeat
</style>