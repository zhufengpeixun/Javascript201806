let  http = require("http");
let  url = require("url");
//console.log(http);
// http.createServer : 创建一个服务；
let  server= http.createServer(function (req,res) {
    console.log(100);
    // 当访问这个服务时，触发这个函数；
    // req: 代表的是请求体中的信息
    // res: 代表响应体的信息；
    //console.log(req.url);// 代表的请求地址；路径；
    console.log(url.parse(req.url,true));
    // true : query的属性值是一个对象；存储了地址中的参数；以键值对形式存储；默认是false,query的属性值是一个字符串；
    // pathname : 路径
    // query : 参数；
});
// 端口 0-65535；建议mac3000以上
server.listen(16000,function () {
    // 第一个参数： 监听的端口；
    // 第二个参数函数： 当服务启动成功，会触发这个回调函数；
    console.log("服务启动成功")
});
// 一个端口只能一个服务进行监听；不能多个服务监听一个端口号；否则会出现端口号占用；
