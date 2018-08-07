/**
 * 开发环境的配置内容
 */
const port = Number.parseInt(process.env.PORT) || 3001
module.exports = {
    env: 'development', //环境名称
    port: port,         //服务端口号
    mongodb_url: '',    //数据库地址
    redis_url:'',       //redis地址
    redis_port: ''      //redis端口号
}
