<template>
	<div class="popularize">
		<div class="l-con">
			<div class="headline clearfix">
				<i class="icon icon_t"></i>
				<span class="name">推广</span>
			</div>
			<div class="story-box clearfix">
				<b-popularize-list
				v-for="list in popularizeList" 
				:key="list.id"
				:popularize="list"></b-popularize-list>
			</div>
		</div>
		<div class="r-con">
			<div class="online">
				<a href="//www.bilibili.com/video/online.html" target="_blank"
				:title="'在线观看：'+ 2333"
				>{{ '在线人数：'+2333 }}</a>
				<em></em>
				<a href="" target="_blank">{{ '最新投稿人数：'+2333 }}</a>
			</div>
			<div class="adpos">
				<a :href="popularizeAd[0].url" target="_blank">
					<img
					v-lazy="popularizeAd[0].pic" :alt="popularizeAd[0].name" class="pic">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import BPopularizeList from 'components/content/popularize/b-popularize-list'
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'popularizeList',
			'popularizeAd'
		])
	},
	mounted() {
		this.$store.dispatch('popularizeList')
	},
	components: {
		BPopularizeList
	}
}
</script>
<style lang="stylus" scoped>
	.popularize
		.l-con
			width 720px
			float left
		.headline
			padding 0 0 15px
			.icon_t
				width 40px
				height 40px
				margin-right 10px
				vertical-align middle
				float left
				margin-top -10px
			.icon
				display inline-block
				background url(../../../assets/images/icons.png) no-repeat
				background-position -141px -75px
			.name
				font-size 24px !important
				line-height 24px
				font-weight 400px
				margin-right 20px
				float left
		.story-box
			height 168px
			overflow hidden
		.r-con
			width 260px
			float right
			.online
				position relative
				height 34px
				line-height 34px
				padding 0 10px
				border-radius 4px
				text-align center
				background #e5e9ef
				white-space nowrap
				a
					color #6d757a
					&:hover
						color #00a1d6
				em
					display inline-block
					border-left 1px solid #b8c0cc
					height 10px
					line-height 10px
					margin 12px 15px 0
					vertical-align top
			.adpos
				margin-top 10px
				border-radius 4px
				verflow hidden
				wdith 260px
				height 150px
				position relative
				a
					display block
					.pic
						border none
						vertical-align middle
						width 260px
						height 150px
</style>
