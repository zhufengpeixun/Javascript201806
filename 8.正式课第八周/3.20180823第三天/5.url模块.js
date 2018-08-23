let  http = require("http");
let  url = require("url");
http.createServer(function (req,res) {
    // 当客户端请求几次，执行几次；
    // req : 请求信息；
    // res : 响应信息；
    //console.log(req.url);
    // url.parse : 把req请求体中的url进行处理，返回一个对象；
    //console.log(url.parse(req.url));
    let {pathname} = url.parse(req.url);
    res.end('./index.html');

}).listen(8080,function () {
    // 这个函数等监听成功之后，立即执行一次；
    console.log("监听成功")
});
