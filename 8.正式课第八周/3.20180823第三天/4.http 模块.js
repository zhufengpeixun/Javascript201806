// http 模块；用于服务器监听服务；
let  http = require("http");
/*http.createServer(function (req,res) {

}).listen(8000,function () {
    // 端口 ： 0-65535 Mac  要求3000以上；
});*/
//console.log(http);

// http.createServer : 创建一个服务；
let server  = http.createServer(function (req,res) {
    // 当客户端请求一次，这个函数会执行一次；
    console.log("你访问了吗");
    // req : request   res : response
    // res.end : 把后端查找的内容响应给客户端；客户端可以接受到后端传输的数据；
    res.end("123");
});
// 用一个端口号监听这个服务；
server.listen(8000,function () {
    console.log("监听成功");
});
/*let server1  = http.createServer(function (req,res) {
    // 当客户端请求一次，这个函数会执行一次；
    console.log("你访问了吗");
    // req : request   res : response
    res.end();
});
// 用一个端口号监听这个服务；
server1.listen(80001,function () {
    console.log("监听成功");
});*/

// 一个端口号只能被一个服务监听；如果多个服务监听同一个端口；那么会出现端口被占用；


