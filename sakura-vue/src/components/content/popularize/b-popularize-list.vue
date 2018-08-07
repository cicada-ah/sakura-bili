<template>
	<div class="spread-module">
		<a :href="popularize.url">
			<div class="pic">
				<img v-lazy="popularize.pic" :alt="popularize.name">
				<!-- 视频预览图——未完成 -->
				<div class="cover-preview-module">
					<img src="" alt="" class="cover">
					<div class="progress-bar">
						<span style="width: 0%"></span>
					</div>
				</div>
				<div class="mask-video"></div>
				<div class="donmu-module"></div>
				<span class="dur">{{ formatTime(popularize.archive.duration) }}</span>
				<div class="w-later"></div>
			</div>
			<p class="t" :title="popularize.name">{{ popularize.name }}</p>
		</a>
	</div>
</template>
<script>
export default {
	props: {
		popularize: {
			type: Object
		}
	},
	methods: {
		formatTime(seconds) {
			let res = ''
			if (seconds >= (3600 * 60)) {
				res = [
				parseInt(seconds / 60 / 60),
				parseInt(seconds / 60 % 60),
				parseInt(seconds % 60)
			]
			.join(":")
			.replace(/\b(\d)\b/g, "0$1")
			} else {
				res = [
				parseInt(seconds / 60 % 60),
				parseInt(seconds % 60)
			]
			.join(":")
			.replace(/\b(\d)\b/g, "0$1")
			}
			return res
		}
	}
}
</script>
<style lang="stylus">
	.spread-module
		float left
		margin 0 20px 20px 0
		position relative
		width 160px
		height 148px
		font-size 12px
		overflow hidden
		a
			.pic
				position relative
				width 160px
				height 100px
				display block
				overflow hidden
				text-align center
				border-radius 4px
				.cover-review-module
					opacity 0
					position absolute
					left 0
					top 0
					width 100%
					height 100%
					transition opacity .3s
				.mask-video
					opacity 0
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					background rgba(0,0,0,.2)
					transition opacity .3s
				.dur
					opacity 0
					position absolute
					bottom 2px
					left 6px
					color #fff
					height 12px
					line-height 12px
					padding 0 5px 1px 0
					transition all .3s
				.w-later
					display none
					width 22px
					height 22px
					position absolute
					right 6px
					bottom 4px
					cursor pointer
					background-image url(../../../assets/images/maskTime.png)
				&:hover .dur,&:hover .mask-video
					opacity 1
				&:hover .w-later
					display block
			.t
				padding-top 8px
				height 40px
				line-height 20px
				transition all .2s linear
				color #222
				word-wrap break-word
				word-break break-all
				overflow hidden
				text-align left
		&:hover .t
			color #00a1d6					
</style>

