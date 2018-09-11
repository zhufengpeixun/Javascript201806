// react 是FaceBook(脸书) 研发一款MVC模式的JS框架；

// M : Model  : 数据层   V : Vie 视图层   C ： controller 控制器；

//action/reducer ==> controller == > Model  ==> view(component)

// React： 开发；
// 1.组件的复用，模块化；import  export
// 2. es6 开发
// 3. less  sass
// 4.js和css 进行打包压缩；

// webpack : 依赖环境的安装和webpack配置文件的书写，是非常繁琐的；
// vue  : vue-cli；
// react  : create-react-app  安装到全局下；
// npm  install  create-react-app  -g;

// create-react-app  + 项目名称；
// 项目名称： 1.不能大写
//          2.不能有中文
//          3.不能用特殊的符号（_和-）


// 跑通react；
//cd  day1
// yarn  start  :  跑起环境，react会自动开启一个本地端口，并且打开浏览器；把页面渲染出来；


// node_modules : 存放一些模块；有第三方模块；
// public:存放一个html,webpack 将最后打包的js，会自动插入这个HTML中；React会获取到当前页面中id叫root元素；
// src : 这个是开发者用来开发代码的文件；开发人员需要把代码在这个路径下进行开发操作； index.js  : webpack会以这个src中index.js为入口；进行模块之间的关联；
// render : 渲染；

// .gitignore : 可以忽略相应的文件上传；git不会对其进行推送；
// yarn.lock : 开发依赖模块的版本以及来源；

// 如果webpack需要支持less、sass ;需要更改配置文件，less-loader 去配置；需要将配置文件暴露出来，需要执行yarn eject 命令；但是这个命令，是不可逆的；

// 1. 在react的结构中，不许出现相对路径；因为webpack在进行解析时，不能够成功对这样的路径进行解析；


// Vue全家桶 ： vue /vue-router/vue-cli/ axios /vuex / webpack/element iview

// React 全家桶： create-react-app   react  react-router  react-redux  redux react-dom   ant/dva


// 组件化：
// 可组合  ： 每个组件都可以和其他组件配合使用，还可以嵌套使用
// 可重用  ： 一个组件可以应用在多个场景下
// 可维护 ： 每个组件都有自己的逻辑；方便维护使用；
// 高内聚，低耦合；





