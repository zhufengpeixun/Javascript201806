// 导入
let  http = require("http");
// 创建服务
let server=http.createServer(function (req,res) {

    //res.end 它可以打开服务器向客户端传输数据的通道；把数据放进res.end的实参中，那么数据就可以传输到前端；
    // 浏览器可以识别出数字，字母；但是不能正常解析汉字；
    // 当客户端向服务器发送请求时，服务器先发送给客户端一个响应头；这个响应头包含当前数据的一些信息；比如内容长度，数据的类型...;浏览器不知道服务器返回客户端什么类型；只要服务器在响应头中设置对应的响应类型，浏览器按照响应头进行解析就可以了；
    // 常见的响应类型
    // text : text/plain
    // html : text/html
    // css : text/css
    // js : application/javascript
    // png : image/png
    // json : application/json
    res.setHeader("Content-Type","text/plain;charset=UTF-8")
    res.end("今天处暑");
});
// 监听
server.listen(8080,function () {
    console.log("启动成功");
});
// 一旦服务器的代码发生修改，一定重新启动服务；
