import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route} from "react-router-dom";
let Home  = ()=>{
    return <div>HOME</div>
};
let Personal = ()=>{
    return <div>PERSONAL</div>
};
let User = ()=>{
    return <div>USER</div>
};
ReactDOM.render(
    <Router>
        <div>
            {/*路由是从上到下进行匹配；*/}
            {/*exact : 设置属性值是true，那么和当前路径完全相同，才显示；*/}
            <Route path="/"  exact={true} component={Home}/>
            <Route path="/personal" component={Personal}/>
            <Route path="/user" component={User}/>
        </div>
    </Router>,
document.querySelector("#root"));
