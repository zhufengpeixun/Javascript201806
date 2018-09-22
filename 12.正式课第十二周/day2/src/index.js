
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.css";
import {Provider} from "react-redux";
import store from "./store"
ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,window.root);