let  http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");

// npm init  -y
// npm  install mime --save;

http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url);
    // mime : 是第三方模块；需要下载；
    // mime 有个getType 的方法；只需要把路径传给这个方法，那么就会返回当前文件对应的content-type 类型；
    res.setHeader("Content-Type",mime.getType(pathname))
    //console.log(mime.getType(pathname));
    fs.readFile("."+pathname,function (err,data) {
        res.end(data);
    });
}).listen(8888,function () {
    console.log("监听成功");
});

