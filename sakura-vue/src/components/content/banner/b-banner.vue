<template>
	<div class="carousel-box">
		<div class="carousel-module">
			<div class="panel">
				<ul class="pic" style="width: 500%" 
					ref="carousel">
					<banner-list
					v-for= "item in bannerList"
					:carousel= "item"
					:key= "item.src_id"
					></banner-list>
				</ul>	
				<ul class="title" v-if="bannerList[carouseCount]">
					<a href="bannerList[carouseCount].url"
					target="_blank"
					>{{ bannerList[carouseCount].name }}</a>
				</ul>	
				<ul class="trig">
					<li
					:class= "{on:carouseCount === index }" 
					v-for="(item, index) in bannerList"
					@click="resetInterval(index)"
					:key="item.src_id"
					></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import bannerList from 'components/content/banner/b-banner-list'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			carouseCount: 0,
			carouselInterval: Function
		}
	},
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'bannerList'
		])
	},
	methods: {
		setInterval() {
			// set carousel interval
			this.carouselInterval = setInterval(() => {
				this.carouseCount ++
				this.carouseCount === 5? this.carouseCount = 0: null
				let distance = -100 * this.carouseCount
				let left = distance + '%'
				this.$refs.carousel? this.$refs.carousel.style.marginLeft = left: null
			}, 5200)
		},
		resetInterval(index) {
			this.carouseCount = index
			const distance = -100 * this.carouseCount
			const left = distance + '%'
			this.$refs.carousel.style.marginLeft = left
			clearInterval(this.carouselInterval)
			this.setInterval()
		}
	},
	mounted() {
		this.setInterval()
		this.$store.dispatch('bannerList')
		// this.$nextTick().then(() => {
		// 	console.log(this.bannerList)
		// })
	},
	components: {
		bannerList,
	}

}
</script>
<style lang="stylus" scoped>
.carousel-box
	width: 440px
	height 220px
	float left
	.panel
		position relative
		border-radius 4px
		overflow hidden
		width 100%
		height 100%
		.pic
			transition all .4s
		.title
			position absolute
			bottom 0
			left 0
			width 100%
			height 35px
			line-height 35px
			background rgba(0,0,0,.5)
			font-size 14px	
			a
				position absolute
				width 100%
				color #fff
				text-decoration none
				padding-left 10px
				-webkit-transition all .3s
				-o-transition all .3s
				transition all .3s	
		.trig		
			position absolute
			bottom 5px
			right 5px
			overflow hidden
			padding 2px 5px
			li
				float left
				cursor pointer
				width 18px
				height 18px
				margin 2px 2px
				background url(../../../assets/images/icons.png) -855px -790px no-repeat
				&:hover
					background-position -919px -790px
				&.on
					background-position -855px -727px
</style>

