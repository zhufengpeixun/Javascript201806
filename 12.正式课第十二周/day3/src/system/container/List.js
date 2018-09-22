import React from "react";
export default class Home extends React.Component{
    constructor(){
        super();

    }
    getUser=()=>{
        let  userList = JSON.parse(localStorage.getItem("user"))
        return userList;
    }
    render(){
        return <div>
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>用户名</th>
                    </tr>
                </thead>
                <tbody>
                {this.getUser().map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                    </tr>
                })}
                </tbody>
            </table>

        </div>
    }
}