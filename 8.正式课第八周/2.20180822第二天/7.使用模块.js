//require();// 导入
// 如果js在浏览器运行，那么浏览器会给js全局的window环境；如果要是在服务器上运行，服务器会给当前js提供global环境；
// {}

// node 天生自带模块化：如果是一个js文件，那么会在当前js文件代码的最外层套一个自执行函数；

/*(function (exports,module,require,__dirname,__filename) {//
    console.log(this);
    // exports : 导出
    // module : 模块
    // require : 导入
    // __dirname
    // __filename

    let fs = require("fs");
    console.log(fs);
})();*/
/*console.log(exports)// {};
console.log(module);// 对象；
console.log(require);// 函数
console.log(__dirname);// 当前文件父级文件的绝对路径
console.log(__filename);/*/// 当前文件的绝对路径；

// 使用模块，如果是同级目录，需要加上./
// 在node的环境下，可以省略.js  .json ;
// require 解决的模块的入口问题；
let a = require("./6");// 到入模块
console.log(a);
/*fn();
console.log(fn);*/
a.fn();
