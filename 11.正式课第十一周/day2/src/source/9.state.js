import React from "react";
import ReactDOM from "react-dom";

//react : 属性和state
// 属性： 是父组件中传递过来的；
// state : 是自己管控的状态；这个state可以自己进行修改；
class Count extends React.Component{
    constructor(){
        super();
        // 在constructor中定义一个状态；是一个空间地址类型的；
        this.state = {num:1}
    }
    //1.在react中，给元素绑定一个事件行为，那么这个行为遵循驼峰命名；
   // 2.在定义事件行为的函数时，一般都放在当前类的原型上；绑定事件时，需要通过this去找到这个函数；
    add=()=>{
        //console.log(this);
        // 在react中，react提供专门用来修改状态的方法 setState
        //this.state={num:20} 这样修改状态是无效的；
        // setState : 可以接受一个对象；
        // this.setState({num:this.state.num+1})
        // setState : 接受一个对象；也可以接受一个函数，会把之前的state空间传给当前这个回调函数的参数；
        // 回调函数需要返回一个最新的state对象；
        //this.setState((prevState)=>({num:prevState.num+1}))
        // 在调用setState 时，会默认所有的setState进行合并；
        /*this.setState({num:this.state.num+1});
        this.setState({num:this.state.num+1});*/

        //this.state={num:2};
        // setState : 1.这个方法在执行时，改变了回调函数中的this指向；执行当前的this实例；
        // 2. 当调用setState时，会默认调用render方法；让当前DOM重新渲染；浏览器会根据DOM-diff算法进行计算；把修改的那部分重新渲染；
        this.setState({num:this.state.num+1},function () {
            this.setState({num:this.state.num+1});
        });
        console.log(this);
    }
    render(){
        console.log(100);
        return (<div>
            {this.state.num}
            {this.state.n}
            <button onClick={this.add}>+</button>
        </div>)
    }
}
ReactDOM.render(<Count/>,document.querySelector("#root"));
