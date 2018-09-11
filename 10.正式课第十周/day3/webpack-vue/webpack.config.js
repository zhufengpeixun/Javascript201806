// 采用common.js规范；
// webpack.config.js最终是基于node运行的；
let path = require("path");// node的一个核心模块
let HtmlWebpackPlugins = require("html-webpack-plugin");
module.exports = {
    entry:"./src/main.js",
    output:{
        filename:"bundle.js",// 生成js的文件名,默认会把生成js放在当前的目录下；
        // path.resolve: 接收一个相对路径，返回一个绝对路径;
        //path ：的配置，让生成文件放在当前文件夹下面；会默认创建一个dist文件夹；
        path:path.resolve("./dist")
    },
    module:{
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            // 解析less文件的
            {test:/\.less$/,use:["style-loader",'css-loader','less-loader']},
            // 解析后缀名是png。git  jpg格式的文件；
            {test:/\.(png|jpg|gif)$/,use:"url-loader"},
            // vue-loader : 专门解析.vue文件
            {test:/\.vue$/,use:['vue-loader']}
            ]
    },
    plugins:[
        new HtmlWebpackPlugins({
            // html 的路径；
            template:"./src/index.html"
        })
    ]
}
