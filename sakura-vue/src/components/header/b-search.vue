<template>
	<div class="search">
		<form action="//search.bilibili.com/all" id="searchform" @submit.prevent>
			<input name="keyword" type="text" class="search-keyword" autocomplete="off" accesskey="s" x-webkit-speech="" x-webkit-grammar="builtin:translate" placeholder="这样的历史剧才靠谱！" data-recommend="av8509845" 
			@focus="isListShow = true" 
			@blur="hiddenList" 
			@keyup.enter="inputList($event)"
			v-model = "inputValue"
			>
			<button type="submit" class="search-submit"></button>
		</form>
		<ul class="bilibili-suggest"
		 v-show='listShow' 
		 @mouseover="isOnTudo = true"
		 @mouseout="isOnTudo = !isOnTudo"
		 >
			<li class="kw">
				<div class="b-line">
					<p>
						<span>
							历史搜索
						</span>
					</p>
				</div>
			</li>
			<li v-for="value in tudoItems" :key="value" class="suggest-item">
				{{ value }}
				<div class="cancel" 
				@click="removeTudo(value)"></div>
			</li>
		</ul>		
		<a class="link-ranking" href="//www.bilibili.com/ranking" target="_blank">
			<span>排行榜</span>
		</a>
	</div>
</template>
<script>
const STORAGE_KEY = 'history-serch'
const historyStorage = {
	fetch: function () {
		let tudos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
		return tudos
	},
	save: function (tudos) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tudos))
	}
}
	export default {
		data () {
			return {
				isOnTudo: false,
				isListShow : false,
				inputValue : '',
				count: 0,
				tudoItems : historyStorage.fetch()
			}
		},
		computed: {
			listShow () {
				return this.isListShow || this.isOnTudo
			}			
		},
		methods: {
			hiddenList () {
				this.isOnTudo? this.isListShow: this.isListShow = !this.isListShow
			},
			inputList () {
				let val = this.inputValue.trim()
				if (this.tudoItems.indexOf(val) < 0) {
					this.tudoItems.push(val)
				}
			},
			removeTudo (tudo) {
				this.tudoItems.splice(this.tudoItems.indexOf(tudo), 1)
			}
		},
		watch: {
			tudoItems: {
				handler (tudos) {
					historyStorage.save(tudos)
				},
				deep: true
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.search
		z-index 100
		position absolute
		top calc(170px - (56px - 32px) - 32px)
		right 0
		width 268px
		height 32px
		padding 2px 2px 2px 72px
		background-color rgba(0, 0, 0, 0.12)
		border-radius 6px
		#searchform
			background-color rgba(255, 255, 255, 0.88)
			display block
			height 32px
			border-radius 4px
			transition .2s background-color
			margin-top 0em
			&:hover
				background-color #fff			
			.search-keyword
				float left
				width 200px
				color #222
				font-size 12px
				overflow hidden
				height 32px
				line-height 32px
				padding 0 12px
				border 0
				box-shadow none
				background-color transparent
				outline 0
			.search-submit
				display block
				position absolute
				right 0
				width 48px
				cursor pointer
				height 32px
				background url(../../assets/images/icons.png) -653px -720px
				margin 0
				padding 0
				border 0
				&:hover
					background-position -718px -720px	
		.link-ranking
			position absolute
			left 2px
			top 2px
			height 32px
			line-height 32px
			background-color rgba(255, 255, 255, 0.8)
			border-radius 4px
			width 68px
			&:hover
				background-color #fff
			span
				padding-left 26px
				color #f25d8e
				display inline-block
				background url(../../assets/images/icons.png) -659px -655px no-repeat
		.bilibili-suggest
			position relative
			border 1px solid #e5e9ef
			margin-top 2px
			background #fff
			z-index 99999
			border-radius 4px
			box-shadow 0 2px 4px rgba(0,0,0,.16)
			padding-bottom 5px
			font-size 12px
			.kw
				.b-line
					border-top 1px solid #e5e9ef
					position relative
					height 10px
					margin 10px 10px 0
					p
						margin-top -10px
						text-align center
						span
							display inline-block
							padding 0 10px
							height 18px
							text-align center
							cursor pointer
							color #99a2aa
							background #fff
			.suggest-item
				padding 6px 10px
				cursor pointer
				word-wrap break-word
				word-break break-all
				display block
				color #222
				position relative
				&:hover
					background-color #e5e9ef
				.cancel
					position absolute
					right 10px
					top 0
					width 38px
					height 28px
					background url(../../assets/images/icons.png) -461px -530px no-repeat	
					&:hover
						background-position: -525px -530px	
</style>