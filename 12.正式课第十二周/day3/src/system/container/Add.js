import React from "react";
export default class Add extends React.Component{
    constructor(){
        super();

    }
    addUser=()=>{
        let userList = JSON.parse(localStorage.getItem("user")) || [];
        userList.push({id:Math.random(),username:this.x.value});
        localStorage.setItem("user",JSON.stringify(userList));
        // 凡是由路由渲染的组件，那么当前组件的属性上会自带三个  history  location  match
        console.log(this.props);
        this.props.history.push("/user/list")
    };
    render(){
        return <div> <input type="text" ref={(x)=>this.x = x}/>
            <button onClick={()=>{this.addUser()}}>添加用户</button></div>
    }
}
