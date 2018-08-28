// express : 第三方模块；模块之间相互进行依赖；
/*let  http = require("http");
http.createServer(function (req,res) {
    // 在这个方法写路由；根据路由不同，响应客户端内容不同；
    
});*/

let express = require("express");
let  app = express();
// 不同的路径
app.get("/login",function (req,res) {
    res.send("登录");
    // send: 向客户端发送数据；
    //let  {pathname,query} = url.parse(req.url,true);
    // req.headers : 请求头
    // req.query : 参数对象；
    // req.url : 路径+ 参数；
    // req.path : 路由；
    // req.host : 主机域名；本地：localhost == http:// 127.0.0.1
    // req.params : 动态路由参数；
    console.log(req.path);
});
app.get("/register",function (req,res) {
    res.send("注册");
});
app.listen(8000,function () {
    console.log("启动成功")
});