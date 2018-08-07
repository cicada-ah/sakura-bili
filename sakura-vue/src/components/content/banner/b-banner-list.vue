<template>
	<li class="carousel-li">
		<a :href="carousel.url" target="_blank">
			<img v-lazy="carousel.pic" alt="">
		</a>
	</li>
</template>
<script>
export default {
	props: {
		carousel: {
			type: Object
		}
	}
}
</script>
<style lang="stylus" scoped>
	.carousel-li
		width 440px
		height 220px
		float left
		overflow hidden
		a
			color #fff
			width 100%
			height 100%
			img
				width 100%
				height 100%
</style>
