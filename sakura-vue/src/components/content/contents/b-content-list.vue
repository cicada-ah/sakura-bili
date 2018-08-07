<template>
	<div class="b-live">
		<div class="l-con">
			<div class="zone-title">
				<div class="headline clearfix">
					<i :class="contentTitle" class="icon_t"></i>
					<a class="name" href="/" target="_blank">{{title}}</a>
					<div class="bili-tab">
						<div class="bili-tab-item on">
							有新动态
						</div>
						<div class="bili-tab-item">最新投稿</div>
					</div>
					<a href="/" class="link-more">
						更多
						<i class="icon"></i>
					</a>
					<div class="read-push">
						<i class="icon_read"></i>
						<span class="info">
							<b>2333</b>
							条新动态
						</span>
					</div>
				</div>
			</div>
			<div class="storey-box clearfix">
				<ul class="list-live" v-if="content">
					<li v-for="item in content"
					:key="item.cid"
					>
						<b-content-body :contentList="item"></b-content-body>
					</li>
				</ul>
			</div>
		</div>
		<div class="r-con clearfix">
			<b-content-rank 
			:contentId="contentId"
			></b-content-rank>
		</div>
	</div>
</template>
<script>
import BContentBody from 'components/content/contents/b-content-body'
import BContentRank from 'components/content/contents/b-content-rank'
import { mapGetters } from 'vuex'

export default {
	props: {
		content: {
			type: Array
		},
		contentTitle: {
			type: String
		},
		contentId: {
			type: Number
		}
	},
	computed: {
		title() {
			let title = ''
			if (this.contentTitle) {
				switch(this.contentTitle) {
					case 'douga':
						title = '动画'	
						break
					case 'guochuang':
						title = '国创'
						break
					case 'bangumi':
						title = '番剧'	
						break
					case 'music':
						title = '音乐'	
						break
					case 'dance':
						title = '舞蹈'	
						break
					case 'game':
						title = '游戏'	
						break
					case 'technology':
						title = '科技'	
						break
					case 'life':
						title = '生活'	
						break
					case 'kichiku':
						title = '鬼畜'	
						break
					case 'fashion':
						title = '时尚'	
						break
					case 'ad':
						title = '广告'	
						break
					case 'ent':
						title = '娱乐'	
						break
					case 'movie':
						title = '电影'	
						break
					case 'teleplay':
						title = 'TV剧'	
						break
					default:
						title ="未知标题"
				}
			}
			return title
		}	
	},
	components: {
		BContentBody,
		BContentRank
	}
}
</script>
<style lang="stylus" scoped>
	.b-live
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
						background-image url(../../../assets/images/icons.png)
						&.douga
							background-position -141px -908px
						&.bangumi
							background-position -141px -140px
						&.guochuang
							background-position: -140px -1611px
						&.music
							background-position -141px -266px
						&.dance
							background-position -141px -461px
						&.game
							background-position -141px -203px
						&.technology
							background-position -141px -525px
						&.life
							background-position -141px -970px
						&.kichiku
							background-position -141px -332px
						&.fashion
							background-position -141px -718px
						&.ad
							background-position -141px -1228px
						&.ent
							background-position -141px -1032px
						&.movie
							background-position -141px -396px
						&.teleplay
							background-position -141px -845px
					.name
						font-size 24px !important
						line-heght 24px
						font-weight 400
						margin-right 20px
						float left
						color #222
						&:hover
							color #00a1d6
					.bili-tab
						float left
						margin 0 10px 0 0
						overflow hidden
						.bili-tab-item
							float left
							position relative
							height 20px
							line-height 20px
							cursor pointer
							padding 1px 0 2px
							border-bottom: 1px solid transparent
							margin-left 12px
							transition .2s
							transition-property border,color
							&.on
								background-color transparent
								border-color #00a1d6
								color #00a1d6
								&:before
									content ""
									position absolute
									left 50%
									margin-left -3px
									bottom 0
									width 0
									height 0
									border 3px dashed #00a1d6
									border-bottom-style solid
									border-top 0
									border-left-color transparent
									border-right-color transparent
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

