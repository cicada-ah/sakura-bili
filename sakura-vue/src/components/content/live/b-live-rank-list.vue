<template>
	<li class="live">
		<div class="live-item">
			<div class="live-rank" :class="{on: index<3 }">
			{{ index + 1 }}</div>
			<a href="" class="preview">
				<img v-lazy="rank.face" :alt="rank.uname">
			</a>
			<a href="" target="_blank" :title="rank.uname">
				<div class="twrap">
					<p class="pname">
						<span class="uname">{{rank.uname}}</span>
						<span class="online">
							<i class="b-icon b-icon-live"></i><em>{{number}}万</em>
						</span>
						<div class="rank-title">
							{{rank.title}}
						</div>
				</div>
			</a>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		rank: {
			type: Object
		},
		index: {
			type: Number
		}
	},
	computed: {
		number() {
			return (this.rank.online / 10000).toFixed(1)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.live
		margin 0 0 14px 0
		.live-item
			overflow hidden
			position relative
			padding-left 25px
			.live-rank
				position absolute
				top 0px
				left 0px
				height 18px
				color #fff
				line-height  17px
				font-size 12px
				min-width 12px
				text-align center
				background-color #b8c0cc
				border-radius 4px
				z-index 5
				padding 0 3px 0 3px
				font-weight bolder
				&.on
					background-color #f25d8e
			.preview
				position relative
				margin-right 12px
				display block
				float left
				img
					width 40px
					height 40px
					border-radius 20px
			.twrap
				width 180px
				float left
				&:hover
					.uname
						color #00a1d6
				.pname
					line-height 16px
					overflow hidden
					.uname
						max-width 115px
						float left
						white-space nowrap
						text-overflow ellipsis
						color #222
					.online
						max-width 60px
						float right
						color #99a2aa
						line-height 16px
						overflow hidden
						white-space nowrap
						text-overflow ellipsis
						.b-icon
							display inline-block
							width 12px
							height 12px
							vertical-align top
							margin-right 5px
							margin-top 2px
							font-style normal
							font-weight normal
							&.b-icon-live
								background url(../../../assets/images/live-eye.png)
					.rank-title
						max-width 190px
						height 16px
						line-height 16px
						margin-top 4px
						color #99a2aa
						overflow hidden
						white-space nowrap
						text-overflow ellipsis
</style>

