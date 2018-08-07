<template>
	<div class="card-live-module">
		<a :href="liveList.link">
			<div class="pic">
				<img v-lazy="liveList.pic" :alt="liveList.title">
				<div class="snum">
					<span class="auther">{{ liveList.uname }}</span>
					<span class="online">
						<i></i>
						{{ liveList.online }}
					</span>
				</div>
				<div class="mask-video">
					<img v-lazy="liveList.system_cover" alt="">
				</div>
			</div>
			<p class="t" :title="liveList.title">{{liveList.title}}</p>
			<p class="num">{{liveList.area_v2_parent_name}} · {{liveList.area_v2_name}}</p>
			<!-- <p class="t" :title=""></p> -->
		</a>
	</div>
</template>
<script>
export default {
	props: {
		liveList: {
			type: Object
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
				color #9ba3ab
				background-color #fff
				transition all .3s
		&:hover .t
			color #00a1d6					
			white-space initial
			height 50px
</style>


