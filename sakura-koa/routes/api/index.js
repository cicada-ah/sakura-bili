const router = require('koa-router')()
const homePage = require('./homePage')

router.use('/home', homePage.routes(), homePage.allowedMethods())

module.exports = router