// express 是node的一个框架；用于处理server，请求，路由等问题；让后端的代码更加清晰；
// express是node 的第三方模块；
let express = require("express");
//console.log(express);// 函数；
let  app = express();// express 执行相当于http中createServer执行；
/*app.all("*",function (req,res) {
    console.log(1000);
    res.send("789")
});*/
// app.listen ： 监听一个端口，当端口监听成功之后，会触发回调函数；
app.get("/login",function (req,res) {
    // req: 请求体信息  res: 响应信息；
    //console.log(1);
    /*console.log(req.query);// 所有参数
    console.log(req.url);// 路径+ 参数
    console.log(req.header);
    console.log(req.hostname);// 代表当前请求的域名；
    console.log(req.method);// 请求方式 get  post  put  delete
    console.log(req);*/
    //console.log(res);
    res.send("登录");
});
app.post("/register",function (req,res) {
    //res.setHeader("Content-Type","text/plain;charset=UTF-8")
    res.send("注册");
});
// app.get  app.post : 只能接收到对应的请求方式的请求；浏览器的url默认是get请求；
// app.all : 不管是什么类型的请求方式；都会触发这个路由和回调函数；
app.all("/order",function (req,res) {
    res.send("123456");
});
// 如果all中路径以“*”；它可以匹配所有的路径；只要发送相应的请求，都会被拦截住；
// 如果把这个all放在所有路由的最上面，会先匹配成功，那么下面路由即便匹配成功，都不再执行；
app.all("*",function (req,res) {
    console.log(1000);
    res.send("789")
});
app.listen(8888,function () {
    console.log("启动成功");
});
express.router()
