import React from "react";
import store from "../store";
export default class Counter extends React.Component{

    /*componentDidMount(){
        store.subscribe(()=>{
            // 让当前组件强行渲染；
            this.forceUpdate();
        })
    }*/

    constructor(){
        super();
        this.state={num:store.getState().counter.num}
    }
    componentDidMount(){
        // 为了 组件重新渲染；
        store.subscribe(()=>{
            this.setState({num:store.getState().counter.num})
        })
    }
    render(){
        return <div>
                <button onClick={()=>{
                    //点击按钮，派发一个动作；改变store中的state；
                    // m:2  payload : 载荷；
                    store.dispatch({type:"add",m:2})
                }}>+</button>
                <p>{this.state.num}</p>
                <button onClick={()=>{
                    store.dispatch({type:"min",m:1})
                }}>-</button>
        </div>
    }
}
