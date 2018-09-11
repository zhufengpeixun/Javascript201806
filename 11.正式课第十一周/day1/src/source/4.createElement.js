//JSX : HTML和JS的一种混合的写法；
// JSX元素，也是react元素；其实都是虚拟的DOM元素；是一个对象；
// JSX 其实是React.createElement 这个方法的语法糖；
//let  span  =<h1></h1>;
// React.createElement ： 函数执行会默认的创建一个虚拟的DOM元素；
import  React from "react";
import ReactDOM from "react-dom";
/*let  y  = <h1>hello</h1>;
let yy = React.createElement("h1",{a:1},"hello");*/

let w = <h1>
    hello
    <span>1</span>
    <span>2</span>
</h1>;
 let  wc = React.createElement(
     "h1",
     null,
     "hello",
     React.createElement("span",null,1),
     React.createElement("span",null,2)
 );
// React.createElement :
// 第一个参数： 标签类型
// 第二个参数 ： 行间属性 对象数据类型
// 第三个参数 ： 内容
// 从第三个元素开始，那么以后都是当前h1的子节点；
ReactDOM.render(wc,document.getElementById("root"));


