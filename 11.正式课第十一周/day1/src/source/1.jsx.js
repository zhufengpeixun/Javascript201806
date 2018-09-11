
import React  from "react";
import ReactDOM from "react-dom";
// JSX : React JSX : 这是一种React独有的语法；
// 把JS和HTML融合在一起，还有数据，样式都放在这个组件下；最终webpack会把这类型语法编译JavaScript；就相当于可以在JS中写HTML；

// 在react，常常把HTML结果写在JSX中；就相当于之前在JS中拼接的字符串；
//在JSx下，像之前在HTML编辑HTML结构的元素就是react元素；是一个虚拟的DOM元素；


/*let yangshi = {color:"red"}
let  h =<div><h1 style={yangshi}>123</h1></div> ;*/
// ReactDOM.render (param1,param2);
let  data = {name:"董凯凯",age:21};
//let h = <div>function()null[undefined]{[1,2]}[data.name]</div>;
let h = <div className="a" id="zfpx">18299</div>;
let  h1 =<span>hello zfpx</span>;


// param1: 放的是一个React元素；
// param2 : 将要插入的容器中；

// React  : 是React核心库，那么
//console.log(h);// 就是一个对象；
// ReactDOM.render : 将虚拟的DOM元素，插入到真实的DOM元素中并且进行渲染；
// 将h元素插入到root元素中；

ReactDOM.render(h,document.querySelector("#root"),function () {
    console.log(100);
    console.log(document.getElementById("zfpx"));
});

//ReactDOM.render(h1,document.querySelector("#root"));

// 1. JSX元素放到render中，外面只能由一个元素；
// 2. 如果在行间需要写style样式，那么style支持{{}}
// 3. 在React元素中，可以通过{}去获取对象中的值；支持对象数据类型的，必须获取到当前对象的某个值；对象中可以放基本数据类型的值；如果是布尔类型的，null ,undefined ;那么react不会对其解析出对应的值；如果放在数组中，是默认作为字符串进行显示；
// 不能放入对象，同时不能放函数；

// 4.在React元素的行间中，class要写成className ;for===>htmlFor;采用驼峰式的写法；
// 5.如果执行两次render，那么后面的会把前面的进行覆盖；root是用来提供根元素，一般不再public的index.html 进行修改；
// 6.react元素不是一个真正的DOM元素，仅仅是一个虚拟的DOM元素；


// ReactDOM.render(): 渲染；
// 1.在执行render时，先将虚拟的DOM元素转换成真实的DOM元素
// 2.并且把当前真实的DOM元素插入到真实的DOM元素中；
// 3.当把DOM渲染到真实的DOM之后，才会执行后面的回调函数；可以在这个函数中操作DOM；