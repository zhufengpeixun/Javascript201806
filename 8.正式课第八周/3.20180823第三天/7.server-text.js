let  http = require("http");
let  url = require("url");
let fs = require("fs");
http.createServer(function (req,res) {
    //  当浏览器接收到服务器响应回来的内容后，不知道服务器响应回来是类型；如果服务器通过响应头，通知浏览器，返回的是什么类型；
    // 所以在响应回去之前，提前设置响应头；
    // content-type: 设置当前的响应类型  text/plain;
    /*res.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"})
    res.write("你很帅");*/
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    // setHeader 和writeHead  :
    // writeHead : 可以添加状态码；
    res.end("你很帅");
}).listen(9080,function () {
    //可写也可以不写；当监听成功之后，会默认调用这个回调；
    console.log("监听成功");
});