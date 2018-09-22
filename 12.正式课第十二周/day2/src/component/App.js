// 这个组件中存储了所有的组件；
// App 搭建一个供其他组件使用的架子；
import React from "react";
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"
export default class App extends React.Component{
    render(){
        return <div className="container ">
                <div className="row  col-md-6 col-offset-3">
                    <div className="panel panel-danger">
                        <div className="panel-heading ">
                            <TodoHeader/>
                        </div>
                        <div className="panel-body">
                            <TodoList/>
                        </div>
                        <div className="panel-footer">
                            <TodoFooter/>
                        </div>
                    </div>
                </div>
            </div>
    }
}
