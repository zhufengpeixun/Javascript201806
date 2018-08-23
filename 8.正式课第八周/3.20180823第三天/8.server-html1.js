let  http = require("http");
let fs = require("fs");
let url = require("url");
// 常用mine 类型；通知浏览器按照什么类型解析文件；
//  css  : text/css
//  html : text/html
//  jpg : image/jpeg
//  png : image/png
//  js : application/javascript
//  json : application/json
//  text : text/plain;

//  html: 浏览器会默认按照HTML进行解析文件；

http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url);
    // 以.jpg 结尾的字符；
    let  reg = /\.png$/;
    if(reg.test(pathname)){
        res.setHeader("Content-Type","image/png");
        fs.readFile('.'+pathname,function (err,data) {
            // console.log(data);
            res.end(data);
        });
        return;
    };
    // 如果是图片；把图片读成buffer类型；不需要是utf8 格式；
    fs.readFile('.'+pathname,"utf8",function (err,data) {
        res.end(data);
    });
}).listen(8080);
