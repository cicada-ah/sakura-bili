![vue-logo.png](https://i.loli.net/2018/08/06/5b6844efb1974.png)
## 技术栈
---
前端： vue2  +  vuex  +  vue-cli + ES6/7 + axios + stylus 

后端: koa2 + koa2-plugin + restfulApi + axios

部署: forever + nginx + ubuntu远程虚拟机

## 线上效果预览
#### [查看 sakura-vue 请戳这里](http://www.gsce.cc:3000/)


## 说明
---
>  开发环境 ubuntu 18.04 chrome nodejs 8+

>  这个项目主要是用于学习vue全家桶, 前后端开发流程及线上部署.

> 后续会继续完善功能滴～    ⎛⎝≥⏝⏝≤⎠⎞


## 项目描述
---
### 前端部分

#### 项目结构
</br>
```shell
├── README.md
├── build //编任务代码
│   ├── buil.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config //webpack的配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html 
├── package.json //项目的基本信息
├── src //vue文件
└── static //静态资源（图片相关）

```

#### src结构
</br>
```shell
src
├── assets          // 资源目录 图片，样式，iconfont
├── bajax	    // axiosApi接口
├── components      // 全局通用组件目录
├── config          // 项目配置，开关
├── routes          // 路由配置
├── store	    // vuex状态管理仓库
```

#### 组件结构

```shell
├── header  //头部组件
├── content  // 内容组件
│   ├── banner // 轮播组件相关
│   ├── contents // 主体内容组件相关
│   ├── live 	// 直播组件相关
│   ├── popularize	// 推广组件相关
│   └── topVideo 	// 顶部视频组件相关
├── nav // 側导航组件相关
```
一共设计 20余组件，分为头部，内容，側导航。尽量将功能细分，降低组件间的耦合，这样确保组件的复用。


#### store 设计
随着项目页面增多，所以抽离ajax请求放入store中统一管理，子组件数据由父组件props。
随着功能模块不同，store分为多个模块。同时vuex本身应该满足flux架构，所有模块数据通过 state 生成， getters 获取，dispath——》 actions ——》commit ——》mutations 修改，单向流通。

#### 缓存数据
搜索记录会通过local storage 缓存。

---
### 后端部分
</br>
#### 配置文件
为了根据不同运行环境加载不同配置，在根目录中添加config目录,在config目录下添加 test.js development.js  production.js  index.js
</br>
		    **index.js**
```javascript
const development_env = require('./development')
const production_env = require('./production')
const test_env = require('./test')
const configs = {
	development: development_env,
	test: test_env,
	production: production_env
}
module.exports = configs[process.env.NODE_ENV || 'development']
```
#### 为API接口配置路由
---
分离**接口层**和**逻辑层**。
创建app目录，根据请求类型，分类好逻辑层API
接口层统一创建在routes路由下。

```javascript
// routes/api/homePage.js
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

module.exports = router
```
</br>
通过**index.js**统一导出路由
</br>
```javascript
const router = require('koa-router')()
const homePage = require('./homePage')

router.use('/home', homePage.routes(), homePage.allowedMethods())

module.exports = router
```
目前是三级路由，/api,/home,/honePage。
</br>**资源符定位资源，HTTP动词描述操作，状态码表示结果。**

## 整体优化
1. 使用v-lazyload 实现图片懒加载
2. nginx 开启浏览器缓存
3. gzip 打包传输
4. 压缩html，js，css文件
5. 修复官方内存泄露的BUG
...

#### 待实现优化
1.  首屏渲染，
2.  多页SEO
3.  CDN缓存加速
...

## 线上部署
前后端都部署在阿里云的虚拟机上，由于没有用node,渲染页面，所以分开部署node和打包后的dist

`前端`如果需要本地预览，可以修改`webpack.base.conf.js`
```javascript
output: {
    path: config.build.assetsRoot,
    publicPath: './',  //资源的公共路径
    filename: '[name].js'
}
```
这样生产相对资源路径，可以直接访问。如果线上发布，则直接打包即可。

`后端`node.js 通过 `forever`把进程挂在服务器上。
```shell
cd node.js路径
NODE_ENV = production forever start ./bin/www
```
通过 `forever list` 可以查看是否成功...

#### `nginx服务器配置`
修改 nginx.conf
```shell
server {
	listen xx #端口
	server_name xx #域名
	location /api {
		porxy_pass http://127.0.0.1:3000 #反向代理node,js服务器
	}

	location / { #配置静态文件路径(即打包后文件)
		root xxx #静态资源路径路径
		index index.html
	}
}
```

## 部分功能实现
* **弹幕和视频预览**
***
![选区_007.png](https://i.loli.net/2018/08/10/5b6d4339aad80.png)
</br>

![选区_008.png](https://i.loli.net/2018/08/10/5b6d4339c2a60.png)
</br>
</br>
</br>
* **login动画**
***
鼠标悬浮出现登录界面及动态效果。
![登录.gif](https://i.loli.net/2018/08/07/5b68fc0e12b83.gif)
</br>
</br>
</br>

* **轮播图**
***
很普通的幻灯片特效
![banner.gif](https://i.loli.net/2018/08/07/5b68fc0acee1d.gif)
</br>
</br>
</br>

* **排行榜**
***
切换排行不会重复发送请求。
![rank.gif](https://i.loli.net/2018/08/07/5b68fbfe6c899.gif)
</br>
</br>
</br>

* **侧边导航**
---
通过侧边导航，可以对模块重新排序。
![nav.gif](https://i.loli.net/2018/08/07/5b68fc13eb0eb.gif)
---

## 待完善功能

* <del>视频预览</del>

> 1. 08.08 增加视频预览功能～ 
2. 修复官方存在网络访问缓慢时内存泄露的BUG
3. 将延迟一秒访问预览API，防止鼠标一moveover元素上时，就发送请求，避免对服务器造成不必要压力。

*  <del>弹幕</del>

> 1. 08.09 增加弹幕预览功能~
2. 修复官方存在网络访问缓慢时内存泄露的BUG
3. 将延迟一秒访问预览API，防止鼠标一moveover元素上时，就发送请求，避免对服务器造成不必要压力。

* 加入vue-router 实现登录和多页功能etc...
* 重构项目结构和vuex管理优化
* 解决一些bug
...

## 一些问题
1. 图片是从官方api接口获取，会限制请求来源。可以通过如下几种办法。
    1. 服务器端去请求，在从服务器端获取。
    2. 设置< head > 的 < meta > 为 no-referer 隐藏请求源。
