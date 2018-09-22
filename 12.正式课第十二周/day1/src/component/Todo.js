import React from "react";
import store from "../store";
import action from "../store/action/Todo"
export default class Todo extends React.Component{
    constructor(){
        super();
        this.state = {todos:store.getState().todo}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({todos:store.getState().todo})
        })
    }
    render(){
        return <div>
            <input type="text" onKeyUp={
                (e)=>{
                    if(e.keyCode==13){
                        store.dispatch(action.addTodo(e.target.value));
                        e.target.value = "";
                    }
                }
            }/>
            {this.state.todos.map((item,index)=>{
                return  <li key={index}>{item}</li>
            })}
        </div>
    }
}
