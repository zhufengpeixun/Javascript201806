import  React from "react";
import ReactDOM from "react-dom";
let arr = [{name:"张志玲",age:13},{name:"尚晓林",age:13.5}];
// 取值
/*
let div1 = <h1>
    <span>{arr[0].name}</span>
    <span>{arr[1].name}</span>
</h1>;
*/
// 在react中如果需要循环绑定元素，需要用map方法；映射；
// {} : 取值；放JS的代码；或者JS的表达式；[三元运算符]
/*function a() {
    //return 1;
}*/
let  div1 = <ul>
    {/*循环绑定元素；利用了数组map的映射机制，返回一个数组；forEach不可以*/}
    {arr.map((item,index)=>{
        // map的回调函数；
        // 循环需要给每一个元素加上key属性；

        let {name,age} = item;
        return <li key={index}>{name}</li>;
    })}
    {/*{[<li key={index}>{name}</li>,<li key={index}>{name}</li>]}*/}
</ul>;

ReactDOM.render(div1,document.querySelector("#root"));


