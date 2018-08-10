<template>
	<div class="nav-module" ref="nav">
		<div class="nav-bg" :class="{open: isSort}">
			<div class="tips-img"></div>
		</div>
		<div class="nav-list">
			<div    v-for="(item, index) in sortItem"
					:key="index">
				<div class="item" v-if="isDrag && index === currentDrag && currentDrag <= dragId" ></div>
				<div class="item" 
					:class="[{'on': !isSort && current === index }, {'select': isDrag && current === index}]"
					@click="jumpTo(index)"
					@mousedown="dragOpen($event,index)"
					:style="dragStyle"
				>
					{{item.name}}
				</div>	
				<div class="item" v-if="isDrag && index === currentDrag && currentDrag > dragId" ></div>			
			</div>
			<div class="item customize" @click="sort">
				<i class="icon"></i>
				排序
			</div>

		</div>
		<div class="s-line"></div>
		<div class="back-top icon" @click="scrollToTop()"></div>		
		<div class="app-download">
			<a href="/" target="_blank">
				<div class="app-icon" style="position: absolute;"></div>
			</a>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			sortItem: [], // 存储content转化的数据集合
			isSort: false, // 排序开关
			isDrag: false, // 拖拽开关
			dragId: 0, // 拖拽元素索引
			current: 0, // 当前标签号
			durtime: 300, // 导航持续时间
			offset: 50, // 导航偏移值
			navTop: 0, // 导航距离顶部距离
			offsetY:0, // 缓存点击拖拽时e.offsetY 防止抖动
			y: 0, // 拖拽元素相对Y轴偏移量
		} 
	},
	props: {
		content: {
			type: Array
		}
	},
	computed: {
		// 让拖拽跟随鼠标
		dragStyle() {
			return {
				top: `${this.y}px`
			}
		},
		// 获取drag 当前高度对应的index
		currentDrag() {
			let currentIndex = Math.floor(this.y / 32)
			if (currentIndex < 0) {
				currentIndex = 0
			}
			if (currentIndex > this.sortItem.length -1) {
				currentIndex = this.sortItem.length -1
			}
			return currentIndex
		}
	},
	watch: {
		content() {
			this.initSortItem()
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		// 初始化 配置
		init() {
			this.initSortItem()
			this.bindGlobalEvent()
			this.docScroll()
		},
		// 全局监听事件
		bindGlobalEvent() {
			document.addEventListener('scroll',this.docScroll, false)
			document.addEventListener('mousemove', this.dragMove, false)
			document.addEventListener('mouseup', this.dragClose, false)
		},
		// 初始化 转化content的内容
		initSortItem() {
			this.sortItem = Array.from(this.content, (item) => {
				const el  = document.getElementById(item.bili_id)
				const top = this.getTop(el)
				return {
					name: item.name,
					el: el,
					distanceTop: top,
					height: el.offsetHeight
				}
			})
		},
		// 获取元素距离顶部的高度
		getTop(el) {
			let top, doc, body, clientTop, scrollTop
			doc = document.documentElement
			body = document.body
			if (typeof el.getBoundingClientRect !== "undefined") {
				top  = el.getBoundingClientRect().top
			} else {
				top = 0
			}
			clientTop = doc.clientTop || body.clientTop || 0
			scrollTop = window.pageYOffset || doc.scrollTop
			return (top + scrollTop - clientTop)
		},

		docScroll() {
			let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop
			if (scrollTop >= 300) {
				this.$refs.nav.style.top = '0px'
				this.navTop = 0
			} else {
				this.$refs.nav.style.top = "240px"
				this.navTop = 240
			}
			for (let i = 0; i < this.sortItem.length; i++) {
				if (scrollTop >= this.sortItem[i].distanceTop - this.offset) {
					this.current = i
				} else if (scrollTop < this.sortItem[0].distanceTop + this.offset) {
					this.current = -1
				}
				
			}
		},
		// 导航跳转
		jumpTo(index) {
			this.current = index
			const target = this.sortItem[index].el
			this.scrollToTraget(target, this.durtime, this.offset)
		},
		scrollToTraget(target, durtime, offset) {
			const top = target.getBoundingClientRect().top  + ( window.pageYOffset || document.documentElement.scrollTop )  - ( document.documentElement.clientTop || 0 )
			return this.scrollTo(top -(offset || 0), durtime )
		},
		scrollTo(elTop, durtime = 400) {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			const b = scrollTop
			const c = elTop - b
			const d = durtime
			let start = null
			const _this = this
			return new Promise((res, rej) => {
				function step(timeStamp) {
					if (start === null) start = timeStamp
					const progress = timeStamp - start
					if (progress < durtime) {
						const st = _this.easeIn(progress, b, c, d)
						document.documentElement.scrollTop = st
						window.requestAnimationFrame(step)
					} else {
						document.documentElement.scrollTop = elTop
						res()
					}
				}
				window.requestAnimationFrame(step)
			})			
		},
		// easeIn 数学模型
		easeIn(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b
		},
		scrollToTop(durtime = 300) {
			return this.scrollTo(0, durtime)
		},
		sort() {
			this.isSort = !this.isSort
			this.$refs.nav.style.zIndex = 10001
			this.$emit('change')
		},
		// set 鼠标点为拖拽对象的远点
		dragPos(e) {
			this.y = e.clientY - this.navTop - this.offsetY
		},
		// 打开拖拽
		dragOpen(e, index) {
			if (!this.isSort)
				return false
			this.current = index
			this.offsetY = e.offsetY
			this.isDrag = true
			this.dragId = index
			this.dragPos(e)
		},
		// 移动拖拽对象
		dragMove(e) {
			if (this.isDrag) {
				this.dragPos(e)
			}
			e.preventDefault()
		},
		// 拖拽关闭
		dragClose() {
			if (this.isDrag) {
				this.isDrag = false
				if (this.currentDrag === this.dragId) {
					this.jumpTo(this.dragId)
				} else {
					this.$store.dispatch('reOrder', {
						currentDrag: this.currentDrag,
						dragId: this.dragId
					})
				}
			}

		}
	}
}	
</script>

<style lang="stylus" scoped>
	.nav-module
		position fixed
		z-index 10
		left 50%
		margin-left: 500px
		top 0
		transition top .3s
		.nav-bg
			position absolute
			opacity 0
			top -15px
			right 0
			height 100%
			padding-bottom 20px
			width 60px
			background hsla(0, 0%,100%,.8)
			border-radius 4px
			overflow hidden
			transition all .3s cubic-bezier(.68,-.55,.27,1.55)
			&.open
				right -20px
				width 200px
				opacity 1
			.tips-img
				position absolute
				width 117px
				height 333px
				background url(../../assets/images/nav-img.png)
				left 12px
				top 14px
		.nav-list
			position relative
			background-color #f6f9fa
			border 1px solid #e5e9ef
			overflow hidden
			border-radius 4px
			.item
				width 48px
				height 32px
				line-height 32px
				text-align center
				transition background-color .3s,
							color           .3s
				cursor pointer
				-webkit-user-select none
				-moz-user-select none
				-ms-user-select none
				user-select none
				&:hover
					background-color #00a1d6
					color #fff
				&.on				
					background-color #00a1d6
					color #fff
				&.select
					position absolute
			.customize
				height 38px
				line-height 20px
				padding 8px 0
				border-top 1px solid #e5e9ef
				.icon
					display block
					margin 0 auto 4px
					background-position -663px -151px
					height 18px
					width 18px
					background-image url(../../assets/images/icons.png)
				&:hover
					color #fff
					.icon
						background-position -727px -151px
		.s-line
			position relelative
			border-left 1px solid #ddd
			border-right 1px solid #ddd
			height 9px
			width 30px
			margin 0 auto
		.icon
			background-image url(../../assets/images/icons.png)
		.back-top
			position relative
			display block
			cursor pointer
			height 48px
			background-position -648px -72px
			background-color #f6f9fa
			border 1px solid #e5e9ef
			overflow hidden
			border-radius 4px
			&:hover
				background-color #00a1d6
				border-color #00a1d6
				background-position -714px -72px
	 	.app-download
			position relative
			width 50px
			height 70px
			 .app-icon
				left -15px
				width 80px
				height 80px
				background-image url(../../assets/images/app-icon.png)
				background-position-x 0px


</style>

