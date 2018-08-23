// 核心的模块；当安装之后，当前模块已经自动安装好；
// fs 模块； 文件操作模块；一般用于读写文件的；
// 1.先导入模块；
let fs = require("fs");
// 1.异步读取一个文件；
/*fs.readFile("./12.txt","utf8",function (err,data) {
    // err : 代表的是错误信息
    // option : 返回的编码合适；
    // data : 代表读取文件的内容；默认的的编码格式buffer 类型；
    // 通过readFile方法读取的文件内容，默认就是buffer类型 ；
    // 所以一般需要把读取的内容转换成utf8格式的；
    // 0-9 a-f
    // 每三个buffer值表示一个汉字；每个字母或数字，由一个buffer类型来表示；
    console.log(data);
});*/

// 2.同步读取文件
// fs.readFileSync(path,options); 同步读取文件内容，把读出去的内容放到当前方法的返回值，不需要回调函数；
/*let con = fs.readFileSync("./12.txt","utf8");
console.log(con);
console.log(1);*/

// 修改文件：

// 3.writeFile
// 4.writeFileSync

// 1. path
// 2. data : 写入的数据
// 3. option： 编码格式
// 4.callback : 回调函数；
// writeFile : 是把原有的内容覆盖掉；
// 1. 向文件的末尾追加字符；
/*let str = ""
fs.readFileSync("./12.txt","utf8",function (err,data) {
    // 当异步任务执行完成，才会执行这个回调；
    str = data;
})
fs.writeFile('./12.txt',str+"马上毕业了",function(err){
    //err : 错误信息；
    // 当把数据写入成功之后，会调用这个函数；
    console.log(1);
});
console.log(12);*/

/*fs.readFile("./12.txt","utf8",function (err,data) {
    console.log(2);
    console.log(data);
})
let a = fs.writeFile("./12.txt","Biyelettttttttttttttttttttttt","utf8",function () {
    console.log(1);
});*/
//console.log(a);// 默认返回值是undefined；同步写入；
// 1. path  2.data   3. 格式；
// 如果都是异步，谁先完成，先触发谁；
fs.appendFile('./12.txt',"hhee",function (err,data) {
    
})











