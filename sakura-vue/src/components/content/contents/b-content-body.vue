<template>
	<div class="card-live-module">
		<a :href="'http://www.bilibili.com/video/av' + contentList.aid">
			<div class="pic">
				<img v-lazy="contentList.pic" :alt="contentList.title">
				<div class="snum">
					<span class="auther">{{ contentList.owner.name }}</span>
				</div>
				<div class="mask-video">
					<img v-lazy="contentList.system_cover" alt="">
				</div>
			</div>
			<p class="t" :title="contentList.title">{{contentList.title}}</p>
			<p class="num">
				<span class="play">
					<i class="icon"></i>
					{{viewNum}}

				</span>
				<span class="danmu">
					<i class="icon"></i>
					{{danmaku}}
				</span>
			</p>
			<!-- <p class="t" :title=""></p> -->
		</a>
	</div>
</template>
<script>

export default {
	props: {
		contentList: {
			type: Object
		}
	},
	computed: {
		viewNum() {
			let num  = this.contentList.stat.view
			num >= 10000? num = (num/1000).toFixed(1)+'万' : null
			return num
		},
		danmaku() {
			let num  = this.contentList.stat.danmaku
			num >= 10000? num = (num/1000).toFixed(1)+'万' : null
			return num
		}
	},
	methods: {
	}
}
</script>
<style lang="stylus">
	.card-live-module
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
				img
					width 100%
					height 100%
				.snum
					position absolute
					bottom 0
					height 34px
					width 100%
					background linear-gradient(transparent,transparent,rgba(0,0,0,.5))
					.auther
						white-space nowrap
						text-overflow ellipsis
						left 4px
						bottom 0
						text-align left
					span
						line-height 20px
						height 20px
						display inline-block
						width 47%
						overflow hidden
						font-size 12px
						vertical-align bottom
						position absolute
						color #fff
						font-weight 200
					.online
						right 4px
						text-align right
						bottom 0
						i
							display inline-block
							width 13px
							height 10px
							vertical-align baseline
							margin-right 5px
							background url(../../../assets/images/liveMan.png)
				.mask-video
					opacity 0
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					border-radius 4px
					transition opacity .3s
					background-repeat no-repeat
					background-color #000
					background-position 50%
					background-size contain
				&:hover .dur,&:hover .mask-video
					opacity 1
			.t
				padding-top 8px
				height 16px
				line-height 16px
				transition all .2s linear
				color #222
				word-wrap break-word
				word-break break-all
				overflow hidden
				text-align left
			.num
				margin-top 5px
				width 100%
				height 20px
				line-height 20px
				color #99a2aa
				background-color #fff
				transition all .3s
				i
					display inline-block
					width 12px
					height 12px
					vertical-align top
					margin-right 5px
				.icon 
					background-image url(../../../assets/images/icons.png)
				.play
					line-height 12px
					height 14px
					display inline-block
					width 50%
					overflow hidden
					font-size 12px
					vertical-align bottom
					.icon
						background-position -282px -90px
				.danmu
					line-height 12px
					height 14px
					display inline-block
					width 47%
					overflow hidden
					font-size 12px
					vertical-align bottom
					.icon
						background-position -282px -218px					
		&:hover .t
			color #00a1d6					
			white-space initial
			height 50px
</style>


