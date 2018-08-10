<template>
	<div class="card-live-module" @mouseover="getPdanmu" @mouseout="leave" @mousemove="getOffset($event)">
		<a :href="'http://www.bilibili.com/video/av' + contentList.aid">
			<div class="pic">
				<img v-lazy="contentList.pic" :alt="contentList.title">
				<div class="cover-preview-module" v-show="isShow && isLoad">
					<div class="cover" >
						<img :src="imageUrl" alt="" ref="pvideo">
					</div>
					<div class="progress-bar" v-show ="isShow">
						<span ref="bar"></span>
					</div>
				</div>
				<div class="mask-video">
				</div>
				<div class="danmu-module" 
				v-show ="isShow"
				>
					<P 
					v-for ="(val, key) in danmuData"
					:key ="key"
					:class="['dm', {'row2': key%2 === 0}]"
					:ref ="key"
					>{{val}}</P>
				</div>
				<span class="dur">{{ formatTime(contentList.duration) }}</span>
				<div class="w-later"></div>
				<!-- <div class="w-later"></div>	 -->
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
import { pvideoApi } from 'src/bajax/ajax' 
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			imageUrl: '',
			index: '',
			count: 0,
			isShow: false,
			isLoad: false,
			clearInterval : '',
			cltimeout : '',
			pvideoData: {},
			danmuData: {},
		}
	},
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
		},
	},
	methods: {
		/**格式化时间 */
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
		},
		/**获取视图API */
		getPvideoData() {
			const param = {
				aid : this.contentList.aid
			}
			pvideoApi.pvideo(param).then((response) => {
				const imageUrl = response.data.image[0]
				this.index = response.data.index.length
				this.imageUrl = imageUrl
				this.isLoad = true
			})
		},
		/**获取弹幕API */
		getDanmuData() {
			const param = {
				aid : this.contentList.aid
			}
			pvideoApi.danmu(param).then((response) => {
				this.danmuData = response.data
				this.dmMove()
			})			
		},
		/**计算预览偏移图 */
		getOffset(e) {
				const barValue = parseInt(e.offsetX * 100 / 160)
				this.$refs.bar.style.width = `${barValue}%`
				const dur = parseInt(100 / this.index)
				const index = parseInt(barValue / dur)
				const rows = index%10
				let cors
				if (index < 100) {
					cors = parseInt(index/10) % 10
				} else {
					cors = parseInt(index/100)% 10 *10 + parseInt(index/10) % 10
				}
				const left = -rows * 160 + 'px'
				const top = -cors * 90 + 'px'
				this.$refs.pvideo.style.left = `${left}`
				this.$refs.pvideo.style.top = `${top}`
		},
		/**获取弹幕和视图预览 */
		getPdanmu() {
			this.cltimeout = setTimeout (() => {
				this.isShow = true
				if (!this.imageUrl) {
					this.getPvideoData()
				}
				if (!this.danmuData.length) {
					this.getDanmuData()
				} else {
					if (this.setInterval) {
						console.log(1)
						this.dmStop()
					}
					this.dmMove()
				}
			},1000)

		},
		/**离开，清除预览定时器 */
		leave() {
			this.isShow = false
			this.dmStop()
		},
		/**弹幕移动 */
		dmMove() {
			this.clearInterval = setInterval(
				 () => {
					if (this.count >= this.danmuData.length) {
						this.count = 0
						this.dmRemove(this.danmuData)
					}
					let index = this.count
					const dmlen = this.danmuData[index].length* 12
					this.$refs[index][0].style.transition = `left 5s linear 0s`
					this.$refs[index][0].style.left = `${-dmlen}px`
					this.count++
				}
				, 1000)
		},
		/**超过索引上限，重置弹幕位置 */
		dmRemove(data) {
			for (let index = 0; index < data.length; index++) {
				this.$refs[index][0].style.transition= ''
				this.$refs[index][0].style.left = ''
			}
		},
		/**停止弹幕计时器 */
		dmStop() {
			clearInterval(this.clearInterval)
			this.clearInterval = ''
			clearTimeout(this.cltimeout)
			this.clearTimeout = ''
		}	
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
				.cover-preview-module
					position absolute
					left 0
					top 0
					width 100%
					height 100%
					transition opacity .3s
					.cover
						position absolute
						left 0
						top 7px
						height 98px
						width 100%
						margin-top 2px
						img
							position absolute
							left 0
							top 0
							width 1600px
							height 900px
					.progress-bar
						position absolute
						left 0
						top 0
						width 100%
						height 10px
						border-width 4px 8px
						border-style solid
						border-color #000
						background #444
						box-sizing border-box
						span
							display block
							background #ffffff
							height 2px
				.mask-video
					opacity 0
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					transition opacity .3s
					background-color rgba(0,0,0,.2)
				.danmu-module
					position absolute
					left 0
					top 0
					width 100%
					height 100%
					transition all .3s
					pointer-events none
					.dm
						position absolute
						color #fff
						left 100%
						top 8px
						white-space pre
						text-shadow 1px 1px 2px #001
					.row2
						top 25px
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


