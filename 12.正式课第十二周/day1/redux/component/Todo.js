import React from "react";
import store from "../store"
export default class Todo extends React.Component{
    render(){
        return (<div>
            <input type="text" onKeyUp={(e)=>{
                if(e.keyCode==13){
                    store.dispatch({type:"add_todo",content:e.target.value})
                }
            }}/>
        </div>)
    }
}
