// 组件
// 生命周期 : 对应的钩子函数；
import React from "react";
import ReactDOM from "react-dom";

class Parent  extends  React.Component{
    // constructor render 都是react生命周期中的钩子函数；
    constructor(){
        super();
        this.state={num:0}
        console.log("1.constructor")
    }
    componentWillMount(){
        // 组件第一次初始化，将要挂载；执行一次；
        console.log("2.componentWillMount")
        //debugger
    }
    componentDidMount(){
        //debugger
        // 当组件真正的挂载到DOM上，执行一次；
        console.log("4.componentDidMount")
    }
    shouldComponentUpdate(nextProps,nextState){
        // 当初始化组件时，不会执行，只有当属性或者state发生改变时，才会执行这个函数；
        //nextProps: 代表是改变props之后的值
        // nextState : 代表的是改变之后的state值；
        console.log(nextState);
        console.log("5.shouldComponentUpdate");
        // 如果这个函数返回一个false，不会再次调用render方法；如果返回一个true,那么会继续调用render;改变视图；
        return nextState.num%3;
    }
    componentWillUpdate(){
        // 可以获取到下一次的数据
        // 当shouldComponentUpdate返回true，才会执行这个函数；
        console.log("6.componentWillUpdate")
    }
    componentDidUpdate(){
        //只能获取上一次更新的数据；
        //render 之后才会执行该方法；
        console.log("componentDidUpdate")
    }
    componentWillUnmount (){
        // 当组件销毁时，触发改函数；
        // 移出定时器；移出事件监听；
       console.log("componentWillUnMount")
    }
    handleClick = ()=>{
        this.setState({num:this.state.num+1})
        //ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    }
    // 当state发生改变时，会再次出发render函数；
    render(){
        console.log("3.render");
        return (<div>
            {this.state.num}
            <Child n={this.state.num}/>
            <button onClick={this.handleClick}>+</button>
        </div>)
    }
}

// react中的生命周期的钩子函数： defaultProps => constructor=>componentWillMount => render==> componentDidMount

//state或props改变：
// shouldComponentUpdate==>componentWillUpdate=>render==>componentDidUpdate


// 当父组件触发render时，才会触发子组件中关于数据更新对应的钩子函数；
class Child extends React.Component{
    constructor(){
        super();
        console.log(100);
    }
    componentWillMount(){
        console.log(200);
    }
    // 数据更新会触发子组件的以下 的钩子函数；
    // 初始化子组件不会执行，当父组件数据发生改变，会触发这个钩子函数；
    componentWillReceiveProps(props){
        console.log(1999);
    }
    shouldComponentUpdate(){
        // 当属性或者state发生变化；
        console.log("100000")
        return true;
    }
    componentWillUpdate(){
        // 可以获取到下一次的数据
        // 当shouldComponentUpdate返回true，才会执行这个函数；
        console.log("子组件componentWillUpdate")
    }
    componentDidUpdate(){
        //只能获取上一次更新的数据；
        //render 之后才会执行该方法；
        console.log("子组件componentDidUpdate")
    }
    render(){
        return (<div>
            {this.props.n}
        </div>)
    }
}
ReactDOM.render(<Parent m="123"/>, document.querySelector("#root"))

