require('babel-core/register')
require('babel-polyfill')
const Koa = require('koa')
const path = require('path')
const app = new Koa()
const router = require('koa-router')()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const staticcache = require('koa-static-cache')
const api = require('./routes/api')

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/dist'))

app.use(staticcache(path.join(__dirname, 'dist'), {
  maxAge: 365 * 24 * 60 * 60
}))
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
router.use('/api', api.routes(), api.allowedMethods())
app.use(router.routes(), router.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
