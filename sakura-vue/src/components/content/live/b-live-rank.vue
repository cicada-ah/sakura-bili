<template>
	<div class="rank">
		<div class="rank-head">
			<ul class="rank-slt-tab clearfix">
				<li v-for="(item, index) in tabTitle"
					:key="index"
					@click="changeTab(index)"
					:class="{on : clickTab === index}"
				>
					<span class="rank-tab-title">{{item}}</span>
				</li>
			</ul>
		</div>
		<div class="rank-body">
			<div class="tab-con clearfix" ref="tabCon">
				<ul class="tab-item">
					<b-live-rank-list
						v-for="(item, index) in ranking"
						:key="index"
						:rank="item"
						:index="index"
					></b-live-rank-list>
				</ul>
				<ul class="tab-item">
					<li class="data">
						<span>没有数据(-_-#)</span>
					</li>
				</ul>
				<ul class="tab-item">
					<b-live-rank-preview :preview="preview"></b-live-rank-preview>	
				</ul>				
			</div>
		</div>
	</div>
</template>
<script>
import BLiveRankList from 'components/content/live/b-live-rank-list'
import BLiveRankPreview from 'components/content/live/b-live-rank-preview'
export default {
	data() {
		return {
			tabTitle: ['直播排行', '关注的直播', '为你推荐'],
			clickTab: 0
		}
	},
	props: {
		ranking: {
			type: Array
		},
		preview: {
			type: Array
		}
	},
	methods: {
		changeTab(index) {
			this.clickTab = index
			const distance = -100 * this.clickTab
			const left = distance + "%"
			this.$refs.tabCon.style.marginLeft = left
		}
	},
	components: {
		BLiveRankList,
		BLiveRankPreview
	}
}
</script>
<style lang="stylus" scoped>
	.rank
		.rank-head
			position relative
			.rank-slt-tab
				padding-left 0
				position relative
				display inline-block
				vertical-align middle
				li
					float left
					position relative
					padding 1px 0 2px
					border-bottom 1px solid transparent
					height 20px
					line-height 20px
					cursor pointer
					text-align center
					margin-left 15px
					&:hover
						color #00a1d6
					&:first-child
						margin 0
					&.on
						background-color transparent
						border-color #00a1d6
						color #00a1d6
						&:before
							content ''
							display block
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
		.rank-body
			zoom 1				
			overflow hidden
			.tab-con
				margin-left 0%
				width 780px
				transition all .3s
				.tab-item
					display block
					width 260px
					padding-top 20px
					float left
					.data
						text-align center
						width 100%
						height 360px
						padding 0
						margin 0
						line-height 100px
						color #99a2aa
						float none
						span
							display inline-block
							vertical-align middle
							height 20px
							line-height 20px
						&:before
							content ''
							display inline-block
							vertical-align middle
							width 20px
							height 20px
							background url(../../../assets/images/state.png) no-repeat center -598px
							margin-right 5px
</style>

