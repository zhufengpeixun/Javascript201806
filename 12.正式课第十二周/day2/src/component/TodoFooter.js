import React from "react";
import {connect} from "react-redux";
// 返回一个连接后的组件；
import action from "../store/action";
 class TodoFooter extends React.Component{
    render(){
        return <div>
            <nav className="nav nav-pills" onClick={(e)=>{
                //console.log(e.target.getAttribute("data-type"));
                //console.log(e.target.dataset.type);
                let  result =e.target.dataset.type;
                this.props.changeTodo(result);
            }}>
                <li role="presentation" className={this.props.types==="all"?"active":""}><a href="#" data-type="all">全部任务</a></li>
                <li role="presentation" className={this.props.types==="finish"?"active":""}><a href="#" data-type="finish">已完成</a></li>
                <li role="presentation" className={this.props.types==="unfinish"?"active":""}><a href="#" data-type="unfinish">未完成</a></li>
            </nav>
        </div>
    }
}
export default connect((state)=>({...state.todo}),action)(TodoFooter);

