//高阶函数
/*function fn(a) {
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}
fn(1)(2)(3);
let  fn =a =>b=>c=>a+b+c;*/

// 高阶组件 ： 组件中返回一个组件；
// 高阶组件的应用场景：

import React from "react";
import ReactDOM from "react-dom";
import Username from "./Username"
import PassWord from "./Password"
ReactDOM.render(
    <div>
        <Username/>
        <PassWord/>
    </div>,
document.querySelector("#root")
)


