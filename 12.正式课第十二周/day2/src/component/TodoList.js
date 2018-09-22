import React from "react";
import {connect} from "react-redux";
import action from "../store/action"
class TodoList extends React.Component{
    filterTodo=()=>{
        let  todos = [];
        if(this.props.types==="all"){
            todos = this.props.todos;
        }else if(this.props.types==="finish"){
            todos = this.props.todos.filter((item)=>item.isSelected)
        }else{
            todos = this.props.todos.filter((item)=>!item.isSelected);
        }
        return todos;
    }
    render(){
        return <ul className="list-group">
            {this.filterTodo().map((item,index)=>{
                return <li  className="list-group-item" key={index}>
                    <input type="checkbox" checked={item.isSelected} onChange={()=>{
                        this.props.change(item.id);
                    }}/>
                    {item.title}
                    <button className="btn pull-right btn-xs" onClick={()=>{
                        this.props.delete(item.id);
                    }}>&times;</button>
                </li>
            })}
        </ul>
    }
}
export default connect((state)=>({...state.todo}),action)(TodoList);
