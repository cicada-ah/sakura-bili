<template>
	<li class="liveRank">
		<div class="slider-box">
			<div class="carousel-module slider">
				<div class="panel">
					<ul class="pic" ref="panel">
						<li class="scrollx"
							v-for="(item, index) in preview"
							:key="index"
						>
							<a :href="item.url" target="_blank">
								<img v-lazy="item.pic" alt="">
							</a>
						</li>
					</ul>
					<ul class="title">
						<a
						v-for="(item, index) in preview"
						:key="index"
						:href="item.url" 
						:class="{on: count === index}"
						target="_blank"
						>
							{{item.title}}
						</a>
					</ul>
					<ul class="trig">
						<span
						v-for="(item, index) in preview"
						:key="index"
						:class="{spon: count === index}"
						@click="resetInterval(index)"					
						></span>
					</ul>
				</div>
			</div>
		</div>	
		<div class="anchor clearfix">
			<a href="//h.bilibili.com" target="_blank" class="pic fl">
				<img src="../../../assets/images/cm.png" alt="有文画">
			</a>
			<a href="//h.bilibili.com" target="_blank" class="pic fr">
				<img src="../../../assets/images/vd.png" alt="小视频">
			</a>			
		</div>	
	</li>
</template>

<script>
export default {
	data () {
		return {
			count: 0,
			total: this.preview.length,
			carouselInterval: Function
		}
	},
	props: {
		preview:{
			type: Array
		}
	},
	mounted () {
		this.setInterval()
	},
	methods: {
		setInterval () {
			this.carouselInterval = setInterval(() => {
				this.count++
				this.count === this.total? this.count = 0: null
				const distance = -100 * this.count
				const left  = distance + '%'
				this.$refs.panel.style.marginLeft = left
			}, 4200)
		},
		resetInterval (index) {
			this.count = index
			const distance = -100 * this.count
			const left = distance + '%'
			this.$refs.panel.style.marginLeft = left
			clearInterval(this.carouselInterval)
			this.setInterval()			
		}
	}

}	
</script>

<style lang="stylus" scoped>
	.slider-box
		height 248px
		.carousel-module
			position relative
			width 100%
			height 100%
			.panel
				width 100%
				height 100%
				border-radius 4px
				overflow hidden
				.pic
					width 200%
					position relative
					transition all .3s
					li
						position relative
					.scrollx
						float left
						img
							width 100%
							height 100%
				.title
					position absolute
					bottom 0
					left 0
					width 100%
					background rgba(0, 0, 0, .5)
					height 51px
					line-height 30px
					font-size 12px
					z-index 2
					a
						position absolute
						width 100%
						color #fff
						text-decoration none
						padding 10px
						opacity 0
						z-index -1
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
						transition all .5s
					.on
						z-index 1
						opacity 1
				.trig
					position absolute
					z-index 5
					bottom 0
					right 0
					width 100%
					text-align center
					padding 5px 0
					background rgba(0,0,0,.5)
					span
						display inline-block
						width 10px
						height 6px
						margin-left 8px
						border-radius 10px
						background #fff
						cursor pointer
						transition all .3s
					.spon
						width 30px
						background #f45d8f
	.anchor				
		.pic
			margin-top 20px
			display inline-block
		.fl
			float left
		.fr
			float right
</style>
