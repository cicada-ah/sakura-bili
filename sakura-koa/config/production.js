/**
 * 生产环境的配置内容
 */
const port = Number.parseInt(process.env.PORT) || 3000
module.exports = {
    env: 'production', //环境名称
    port: port,         //服务端口号
    mongodb_url: '',    //数据库地址
    redis_url:'',       //redis地址
    redis_port: ''      //redis端口号
}