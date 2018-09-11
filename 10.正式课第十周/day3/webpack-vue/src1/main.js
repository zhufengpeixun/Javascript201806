// import 可以导入模块
/*function Vue() {

}
export default {
    Vue : Vue
}*/
// 导入vue模块；

// vue.js  = runtime + compiler;
// runtime 相对于vue.js小6K;不能编译template；

// 第三方模块不需要加"./";
// 文件模块需要加上“./”
// import 默认导入的是runtime.js;
import  Vue  from "Vue";
import  App from "./App.vue";
new Vue({
    el:"#app",
    components:{
        App
    },
    render:h=>h(App)
    /* render:function(createElement) {
         // createElement : 参数支持组件；
     return  createElement(App)
     }*/
});


/*
new Vue({
    el:"#app",
    //template:"<div>hello</div>";
    // Vue中提供一个render函数；
    render:function (createElement) {
        // createElement : 也是一个函数；第一个参数是标签名字；第二个参数是标签中的内容；返回一个虚拟的DOM；虚拟的DOM是一个对象；VNode
        console.log(createElement('h', 'hello'));
        return createElement('h',['hello',createElement("span","五星红旗")])
    }
})
*/
