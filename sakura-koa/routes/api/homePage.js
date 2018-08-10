const router = require('koa-router')()
import homePageApi  from '../../app/controllers/page/home/homePageApi'


router
	.get('/banner', homePageApi.banner)
	.get('/ding', homePageApi.ding)
	.get('/live', homePageApi.live)
	.get('/popularize', homePageApi.popularize)
	.get('/rank3', homePageApi.rank3)
	.post('/contentrank', homePageApi.contentrank)
	.post('/contentrankweek', homePageApi.contentrankweek)
	.post('/danmu', homePageApi.danmu)
	.post('/pvideo', homePageApi.pvideo)

module.exports = router