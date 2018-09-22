import React from "react";
import Add from "./Add"
import List from "./List";
import {Route,Link} from "react-router-dom";
export default class User extends React.Component{
    constructor(){
        super();

    }
    render(){
        return <div>
            <div className="col-md-3">
                <nav className="nav">
                    {/*二级路由*/}
                    <li><Link to={"/user/add"}>添加</Link></li>
                    <li><Link to={"/user/list"}>列表</Link></li>
                </nav>
            </div>
            <div className="col-md-9">
                <Route path="/user" exact={true} component={Add}/>
                <Route path="/user/add" component={Add}/>
                <Route path="/user/list" component={List}/>
            </div>
        </div>
    }
}