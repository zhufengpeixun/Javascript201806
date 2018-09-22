import React from "react";
import ReactDOM from "react-dom";
import Counter  from  "./component/Counter";
import Todo from "./component/Todo";
// 在react-redux : 提供了一个公共的组件；Provider;
import store from "./store"
import {Provider} from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counter/>
            <Todo/>
        </div>
    </Provider>, document.querySelector("#root"));

