// 核心模块 fs  http  url 模块；
// 当下载node时，内置到了当前node的安装包中；
// node 将一些项目不是必须的模块，放到了npm上；如果当前项目需要那个模块，直接通过npm来安装就可以；
let fs = require("fs");
// fs : 文件系统模块；经常用来读写文件；
//1. fs.readFile(path,type,callback); 当数据读取完成之后，执行回调;异步读取文件；当读取成功之后，把数据传给回调函数的第二个参数；
// 如果没有设置编码格式，那么默认读取是buffer类型的；
/*fs.readFile("./12.json",function (err,data) {
    console.log(data);
});*/
//console.log(2);
/*console.log(Buffer.from("123").toString());
console.log(Buffer.from("abc"));*/

// 2.fs.readFileSync: 同步读取；(path,type);把读文件的内容给方法的返回值；
/*
let val = fs.readFileSync("./12.json","utf8");
console.log(val);
console.log(2);*/

// fs.writeFile: 异步写入;覆盖式写入；(path,data,type,callback)
/*fs.writeFile("./12.json","1234567890","utf8",function (err) {
    console.log(100);
})
console.log(1);*/
fs.writeFileSync("./12.json","1234567890","utf8")
 console.log(1);
// 向文件内容的末尾追加内容；异步
/*fs.appendFile("./12.json","1234567890","utf8",function (err) {
 console.log(100);
 })
 console.log(1);*/
