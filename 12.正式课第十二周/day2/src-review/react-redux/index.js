//
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter";
import {Provider} from "react-redux";
import store from "./store"
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counter/>
        </div>
    </Provider>,
document.querySelector("#root")
)


