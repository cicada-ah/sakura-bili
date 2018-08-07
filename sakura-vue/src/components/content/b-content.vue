<template>
	<div class="content">
		<!-- 内容轮播图 -->
		<div class="bili-wrapper">
			<div class="carousel-box">
					<b-banner></b-banner>
			</div>	
			<div class="video-card-box">
				<b-top-video></b-top-video>
			</div>		
		</div>
		<!-- popularize -->
		<div class="popularize-module clearfix">
			<b-popularize></b-popularize>
		</div>
		<!-- live -->
		<div class="live-module clearfix">
			<b-live></b-live>
		</div>
		<!-- content -->
		<div class="content-list clearfix" 
		v-for="(item, index) in content" 
		:id="item.bili_id"
		:key="index">
			<b-content-list 
				:content="item.item"
				:contentTitle="item.contentKey"
				:contentId="item.contentId"
				></b-content-list>
		</div>
	</div>
</template>
<script>
import BBanner from 'components/content/banner/b-banner'
import BTopVideo from 'components/content/topVideo/b-top-video'
import BPopularize from 'components/content/popularize/b-popularize'
import BLive from 'components/content/live/b-live'
import BContentList from 'components/content/contents/b-content-list'
export default {
	props: {
		content: {
			type: Array
		},
	},
	components: {
		BBanner,
		BTopVideo,
		BPopularize,
		BLive,
		BContentList
	}
}
</script>
<style lang="stylus" scoped>
	.content
		width 980px
		margin 0 auto 
		.bili-wrapper
			padding-bottom: 40px
			&:after
				content ''
				display block
				visibility hidden
				height 0
				clear both
				font-size 0	
			.video-card-box		
				float right
				width 540px
				height auto	
			.popularize-module
				padding-bottom 15px		
			&:after	
				content ''
				display block
				visibility hidden
				height 0
				clear both
				font-size 0
			.content-list
				margin 0 auto
				zoom 1
				width 980px			

</style>

