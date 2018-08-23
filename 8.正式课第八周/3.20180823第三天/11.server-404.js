let  http = require("http");
let fs = require("fs");
let url = require("url");
let mime = {
    ".css":"text/css",
    ".html":"text/html",
    ".json":"application/json",
    ".png":"image/png",
    ".js":"application/javascript"
};
http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url);
   // fs.stat  : 验证当前路径是否存在
   fs.stat("."+pathname,function (err,stats) {
       //console.log(err);
       // 如果路径是错误的；那么err是一个对象；如果路径是正确的，结果就是null；
       if(err){
           res.statusCode = 404;
           res.end(`${pathname} is  not  found`);
       }else{
           // stats.isFile : 验证是否是一个文件的方法；如果是文件，返回true；不是返回false；
           //console.log(stats.isFile());
           if(stats.isFile()){
               let reg = /\.(\w+)$/;
               let name = reg.exec(pathname)[0];
               //console.log(name);
               console.log(mime[name]);
               res.setHeader("Content-Type",mime[name]);
               //console.log(pathname);
               fs.readFile("."+pathname,function (err,data) {
                   res.end(data);
               });
           }
           // 如果是文件夹，则返回true；
           //console.log(stats.isDirectory());
           if(stats.isDirectory()){
               fs.readFile("./index.html",function (err,data) {
                   res.end(data);
               });
           }
       }
   })
}).listen(8888,function () {
    console.log("监听成功");
});
