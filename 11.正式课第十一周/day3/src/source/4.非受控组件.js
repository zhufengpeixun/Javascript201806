import React from "react";
import ReactDOM from "react-dom";

class Sum extends React.Component{
    constructor(){
        super();
        this.state={num:0}
    }
    changeState=()=>{
        let  num = Number(this.refs.a.value)+Number(this.y.value);
        this.setState({num})
    }
    render(){
        // 非受控组件： 不受状态的控制；
        // ref : 可以是字符串，也可以是函数；如果是函数；需要给当前函数传递一个参数；当前参数就是当前的元素；
        return (<div onChange={this.changeState}>
                    <input type="text" ref="a"/> +
                    <input type="text"  ref={(b)=>{this.y=b}}/>
                    {this.state.num}
                </div>)
        
    }
}
ReactDOM.render(<Sum/>, document.querySelector("#root"));
