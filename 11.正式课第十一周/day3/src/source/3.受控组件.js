import React from "react";
import ReactDOM from "react-dom";
// 受控组件： 受状态控制的组件；一定要onchange方法；
class  Input  extends React.Component{
    constructor(){
        super();
        this.state={val:100}
    }
    changeVal=(e)=>{
        // e : 会拿到当前的事件源，通过事件源获取input的value值；
        // 只需要在此处改变当前实例的状态就可以改变input的值；
        console.log(e.target.value);
        this.setState({val:e.target.value})
    }
    render(){
        return <div>
            <input type="text" value={this.state.val} onChange={this.changeVal}/>
            {this.state.val}
        </div>
    }
}
ReactDOM.render(<Input/>, document.querySelector("#root"));

