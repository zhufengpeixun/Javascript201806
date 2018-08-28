// 中间件 ： 可以访问请求对象，可以访问响应对象；
// 如果在中间件中没有终结请求，必须通过next把控制权交给下一个中间件，请求将处于请求状态；
let express = require("express");
let app = express();
// 中间件一般都会放在路由的最上端；可以处理请求对象req,还可以处理响应对象；
// 一般用于处理各个请求的公共部分；
app.use(function (req,res,next) {
    // 中间件，只要访问，就会被触发；这个函数；
    console.log(1);
    req.sleep = function () {
        console.log("睡觉的发红包");
    }
    next();// 调用下一个中间件
});
app.use(function (req,res,next) {
    console.log(100);
    res.send("你很帅！");
});
// 错误处理中间件；四个参数；
// 四个参数中next虽然不需要执行，但是一定要有；
app.use(function (err,req,res,next) {
   res.status(500).send("something broke!")
});
app.get("/login",function (req,res) {
    console.log(2);
    req.sleep();
    res.send("登录");
});
app.get("/register",function (req,res) {
    console.log(6);
    req.sleep();
    res.send("注册")
});
console.log(3);

app.listen(8090,function () {
    console.log("启动成功");
});
