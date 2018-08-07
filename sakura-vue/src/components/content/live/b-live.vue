<template>
	<div class="b-live">
		<div class="gg-floor-module">
			<div class="item">
				<a href="">
					<img v-lazy="" alt="">
				</a>
			</div>
		</div>
		<div class="l-con">
			<div class="zone-title">
				<div class="headline clearfix">
					<i class="icon icon_t"></i>
					<a class="name" href="//live.bilibili.com" target="_blank">正在直播</a>
					<p class="online">
						当前共有
						<span>{{ online_total }}</span>
						个在线直播
					</p>
					<a href="//vc.bilibili.com" class="fire" target="blank">
					<i class="icon"></i>
					233秒居然能做这些！
					</a>
					<a href="//live.bilibili.com" class="link-more">
						更多
						<i class="icon"></i>
					</a>
					<div class="read-push">
						<i class="icon_read"></i>
						<span class="info">
							<b>{{dynamic}}</b>
							条新动态
						</span>
					</div>
				</div>
			</div>
			<div class="storey-box clearfix">
				<ul class="list-live" v-if="recommend">
					<li v-for="item in recommend"
					:key="item.roomid"
					>
						<b-live-list :liveList="item"></b-live-list>
					</li>
				</ul>
			</div>
		</div>
		<div class="r-con clearfix">
			<b-live-rank :ranking="ranking" :preview="preview"></b-live-rank>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import BLiveList from "components/content/live/b-live-list"
import BLiveRank from "components/content/live/b-live-rank"
export default {
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'online_total',
			'dynamic',
			'recommend',
			'ranking',
			'preview'
		])		
	},
	mounted() {
		this.$store.dispatch('live')
	},
	components: {
		BLiveList,
		BLiveRank
	}
}
</script>
<style lang="stylus" scoped>
	.b-live
		.gg-floor-module
			width 980px
			max-height 80px
			margin-bottom 20px
			position relative
			overflow hidden
			border-radius 5px
		.l-con
			width 720px
			float left
			.zone-title
				padding-right 20px
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
						background-image url(../../../assets/images/icons.png)
						background-position -141px -652px					
					.name
						font-size 24px !important
						line-heght 24px
						font-weight 400
						margin-right 20px
						float left
						color #222
						&:hover
							color #00a1d6
					.online
						float left
						margin-top 8px
						color #99a2aa
						span
							color #00a1d6
					.fire
						margin-top 8px
						margin-left 40px
						color #6d757a
						float left
						.icon
							display inline-block
							vertical-align top
							background-image url(../../../assets/images/icons.png)
							background-position -665px -1113px
							width 14px
							height 14px
							margin-top -3px
					.read-push
						float right
						cursor pointer
						background-color #fff
						border 1px solid #ccd0d7
						border-radius 4px
						height 22px
						padding 0 10px
						transition all .2s
						&:hover
							background-color #ccd0d7
							.icon_read
								transform rotate(1turn)							
						.icon_read
							display inline-block
							width 12px
							height 13px
							transition all .5s
							margin-top 5px
							background-image url(../../../assets/images/icons.png)
							background-position -475px -89px
						.info
							display inline-block
							vertical-align top
							line-height 22px
							margin-left 5px
							b
								font-weight 700
					.link-more
						float right
						width 52px
						height 22px
						line-height 22px
						background-color #fff
						border 1px solid #ccd0d7
						color #555
						border-radius 4px
						text-align center
						margin 0 0 0 10px
						transition all .2s
						i
							display inline-block
							width 6px
							height 12px
							margin -2px 0 0
							transition all .2s
							vertical-align middle
							background-image url(../../../assets/images/icons.png)
							background-position -478px -218px
						&:hover i
							margin-left 5px
			.storey-box
				margin-right -20px
				.list-live
					padding-top 20px
					height 316px
					overflow hidden
					li
						float left
						margin 0 20px 20px 0
						width 160px
						height 148px
						overflow hidden
		.r-con
			float right
			width 260px
			margin-bottom 50px
			min-height 360px
			height 360px
			overflow hidden





</style>

