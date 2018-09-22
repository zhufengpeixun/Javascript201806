import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./container/Home"
import Profile from "./container/Profile"
import User from "./container/User"
import App from "./container/App"
import "bootstrap/dist/css/bootstrap.css"
// 一般情况路由配置路由都在index中进行配置；
ReactDOM.render(
    <Router>
        <App>
            <Switch>
                {/*switch:只有一个路由，就停止，不再向下进行匹配；*/}
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/user" component={User}/>
                {/*进行重定向，跳转to属性对应的路径下；*/}
                <Redirect to="/"/>
            </Switch>
        </App>
    </Router>,
    document.querySelector("#root"));
