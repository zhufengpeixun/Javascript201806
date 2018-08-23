let  http = require("http");
let fs = require("fs");
let url = require("url");
let mime = {
    ".css":"text/css",
    ".html":"text/html",
    ".json":"application/json",
    ".png":"image/png"
};

http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url);
    // 根据pathname的后缀名；去mime对象中去获取对应的content-type;
    let reg = /\.(\w+)$/;
    let name = reg.exec(pathname)[0];//[ '.html', 'html', index: 7, input: '/index1.html' ]
    res.setHeader("Content-Type",mime[name]);
    fs.readFile("."+pathname,function (err,data) {
        res.end(data);
    });
}).listen(8888,function () {
    console.log("监听成功");
});
