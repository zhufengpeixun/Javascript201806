// JSX  : 是JS和HTML的混合结构；
import React from "react";
import  ReactDOM from "react-dom";

let  sty = {border:'1px solid red'}
let  obj = {name:"zfpx",age:9,a:{}}
let  a = <p style={sty} className="a">{[1]}[1,2,3]null</p>;
//a : 虚拟的DOM的元素，是一个对象；
// 1. style===> {{}}
// 2. class===>className   for  ===> htmlFor
// 3. {} ==> 在取值时，这里面不能直接存放对象，函数；如果放一个数组，会把数组默认调用toString转成字符串；
// 4. 如果是在{}中是null  undefined  true  false ,是不显示的；
// 5. React 元素的最外层只能有一个元素；

//
let arr = [{name:"熊大",age:10},{name:"熊二",age:1}];

let  div1 = <ul>
    {arr.map((item,index)=>{
        // 用map得到的元素，需要给每一个元素一个key属性；
        return <li key={index}>{item.name}{item.age}</li>
    })}
</ul>;

// JSX :是React.createElement 的语法糖；
let  a = <div>react is easy<p a="1">说的很对</p></div>

React.createElement(
    "div",
    null,
    "react is easy",
    React.createElement(
        "p",
        {a:1},
        "说的很对")
)
ReactDOM.render(div1,document.getElementById("root"));
