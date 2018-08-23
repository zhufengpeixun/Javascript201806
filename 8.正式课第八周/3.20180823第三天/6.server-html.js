let  http = require("http");
let  url = require("url");
let fs = require("fs");
http.createServer(function (req,res) {
    console.log(1);
    let  {pathname} = url.parse(req.url,true);

    // 浏览器通过url向服务器发送请求，服务器接收到请求，服务器会根据的你的路径，它要找到对应文件，然后服务器把文件读出来，然后把文件的数据通过http;对于node来说，响应res的end方法返回过去；返回过去一个字符串；浏览器接收到之后，把得到的数据进行解析；但是在解析过程中，会遇到link的href,img的src,script的src；客户端会继续要服务器发送请求；服务器的监听函数会再次被触发；
    //console.log(pathname);
    fs.readFile("."+pathname,"utf8",function (err,data) {
        res.end(data);
    });
}).listen(6080,function () {
    console.log("监听成功");
});