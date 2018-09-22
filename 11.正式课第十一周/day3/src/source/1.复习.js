import React from "react";
import ReactDOM from "react-dom";

//  组件
// 1.函数声明
/*function Hello(props) {
    return (<div></div>)
}*/

// 2. 类声明

class  Welcome extends  React.Component{
    constructor(props){
        super();
        console.log(props);
        this.state = {index:1}
    }
    hand=()=>{
        console.log(this.props.a);
        this.setState({index:2})
        this.setState((prevState)=>({index:2}));
        // setState : 当执行setState方法时，会触发render方法；
        // DOM-diff 算法；
    }
    render(){
        return (<div>
            {this.props.a}
        </div>)
    }
}
// 类声明有this  生命周期  状态

// 只有属性和状态可以影响视图；
// 属性是由父组件传递过来
// 状态是自己的管理的；改变进行修改  setState
ReactDOM.render(<Welcome a="1"></Welcome>,document.querySelector("#root"))

