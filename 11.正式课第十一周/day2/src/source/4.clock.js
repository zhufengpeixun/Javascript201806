import React from "react";
import ReactDOM from "react-dom";

let ele ;
function tick() {
    // h1 是一个具体的HTML元素；
    // new  Date 是一个对象数据类型的；
    //Objects are not valid as a React child (found: Wed Sep 12 2018 12:09:26 GMT+0800 (中国标准时间)). If you meant to render a collection of children, use an array instead.
    ele = <h1>
        {new Date().toLocaleString()}
     </h1>
    //当React元素发生变化，不会触发ReactDOM 的render函数，如果需要改变视图，必须手动触发这个ReactDOM.render 函数；
    ReactDOM.render(ele,document.querySelector("#root"));
}
tick();
setInterval(tick,1000);
