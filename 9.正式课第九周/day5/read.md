-- 安装webpack
##1.npm init  -y
##2.npm install webpack@3.8.1 --save-dev

##1. package.json 修改script中的脚本；
##2.配置webpack.config.js 
##3.npm  run  build;


// es6编译成es5;
##安装babel核心包；
npm install babel-core@6.26.0 --save-dev;
##安装babel的解析器；
npm install babel-loader@7.1.2 --save-dev;
##解析es6的工具
npm  install babel-preset-es2015@6.24.1  --save-dev;
// 创建一个.babelrc  文件；