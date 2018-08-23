/*
let qq = require("./3.练习.js");// 让导入的js文件从上到下进行解析；
// require 的返回值是导入模块module.exports 的空间地址；
qq.fn();*/

// 第三方 ： npm install + 包名称

// npm  install nrm  --global;

// nrm ls : 查看当前所有的源；
// nrm  test : 查看哪个源最快；
// nrm use + 源名称；

// yarn

// npm  install yarn --g
// npm install vue --save-dev;
// yarn  add  vue  --save-dev;安装开发依赖
// yarn remove vue  --save-dev;删除开发依赖；
// yarn  add vue  jquery  axios  --save;安装多个生产依赖；


//  核心模块

// fs
// readFile(path,option,callback(err,data){})  默认读出buffer;
// readFileSync(path,option); 把读出来内容给返回值；
// writeFile(path,data,option,callback(err){})
// writeFileSync

// Buffer.from : 把字符串转换成buffer类型
// toString :  把buffer类型转成字符串；
//console.log(Buffer.from("123").toString());

// 1.先读取，后写入
let fs = require("fs");
/*fs.readFile("./4.txt","utf8",function (err,data) {
    // 当读取成功后，会调用回调函数；
    fs.writeFile("./4.txt",data+"456","utf8",function (err) {
        console.log("新增成功")
    })
})*/

// 向文件的末尾，新增内容；
fs.appendFile('./4.txt',"789","utf8",function (err) {
    console.log("新增");
});
// appendFileSync : 同步新增；
console.log(100);



