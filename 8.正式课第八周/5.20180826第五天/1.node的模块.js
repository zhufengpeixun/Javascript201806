// 让js运行在node环境中，js就是一门后端语言；js是可以操作文件的；
//fs.readFile : 异步读取；
//fs.readFile(path,type,callback(err,data){data})
//let content = fs.readFileSync(path,type);
// 异步的写入；覆盖式；把原有的内容 全部覆盖；
// fs.writeFile(path,data,type,callBack);
//let fs = require("fs");
/*fs.writeFile("./1.txt","abcd","utf8",function (err) {

});*/
//writeFileSync
// appendFile : 向文件的末尾追加内容；
/*fs.appendFile("./1.txt","abcd","utf8",function () {
    
});*/
//appendFileSync
console.log(1);
