import axios from 'axios'
import { banner, ding, live, rank3, rankbase, popularize, popularizeAd, pvideo, danmu } from './homePageUrl'

// 静态方法减少内存损耗
class homePageApi {
	/** 轮播图 */
	static async banner(ctx, next) {
		const response = await axios.get(banner)
		ctx.body = response.data
	}  

	/** 内容 */
	static async ding(ctx, next) {
		const response = await axios.get(ding)
		ctx.body = response.data
	}  

	/** 直播 */
	static async live(ctx, next) {
		const response = await axios.get(live)
		const data = response.data
		const result = data.substr(1).substr(0, data.length -2)
		ctx.body = JSON.parse(result)
	}  

	/** 推广*/
	static async popularize(ctx, next) {
		const response = await axios.get(popularize)
		const ad = await axios.get(popularizeAd)
		response.data.popularizeAd = ad.data.data
		ctx.body = response.data
	}  

	/**三日排行 */
	static async rank3(ctx, next) {
		const response = await axios.get(rank3)
		ctx.body = response.data
	} 

	/**content下三日排行 */
	static async contentrank(ctx, next) {
		const body = ctx.request.body
		let categoryId = body.categoryId
		let url = rankbase + categoryId + '-3day.json'
		let response = await axios.get(url)
		ctx.body = response.data
	}

	/**content下一周排行 */
	static async contentrankweek(ctx, next) {
		const body = ctx.request.body
		let categoryId = body.categoryId
		let url = rankbase + categoryId + '-week.json'
		let response = await axios.get(url)
		ctx.body = response.data
	}

	/**弹幕 */
	static async danmu(ctx, next) {
		const body = ctx.request.body
		let aid = body.aid
		let url = danmu + aid
		let response = await axios.get(url)
		ctx.body = response.data
	}

	/**预览图 */
	static async pvideo(ctx, next) {
		const body = ctx.request.body
		let aid = body.aid
		let url = pvideo + aid
		let response = await axios.get(url)
		ctx.body = response.data
	}	
}

export default homePageApi
