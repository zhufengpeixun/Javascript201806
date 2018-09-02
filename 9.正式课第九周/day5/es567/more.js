let path = require("path");// 导入path模块，解析路径；
//console.log(path.resolve("./dist"));
module.exports = {
    entry:{
        // 多入口文件
        main:"./src/main.js",
        main1:"./src/main1.js"
    },// 配置webpack的入口文件；
    output:{// 打包之后文件的出口；
        // 告诉生成js叫什么文件名；
        filename:'[name].js',// name回去entry 中查找对应的文件名；属性名就是文件名；
       //通知生成js放在哪个文件夹下面；
        // path.resolve 解析出一个绝对路径来；
        // 当运行webpack时，自动创建一个dist文件夹；并且把生成js文件放到这个文件夹下面；
        path:path.resolve("./dist")
    }
}