
let express = require("express");
let  app = express();
// app.param : 拦截； 拦截有id的路由；
app.param("id",function (req,res,next) {
    // next：是一个函数；可以让拦截的函数继续向下执行；
    // 在这里可以对req进行扩展；
    console.log(1);
    req.eat =function () {
        console.log("吃西瓜");
    };
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    next();
});
app.param("name",function (req,res,next) {
    // 必须有next，才能继续向下执行；
})
app.get("/login/:id/:name",function (req,res) {
    req.eat();
    console.log(req.path);
console.log(req.params);
res.end("吃西瓜")
});
app.get("/register/:id",function () {
    console.log(100);
})
app.listen(8000,function () {
    console.log("启动成功")
});