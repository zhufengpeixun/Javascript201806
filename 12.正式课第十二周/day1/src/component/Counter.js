
import React from "react";
import store from "../store";
import actions from "../store/action/Counter";
// react-redux : 需要返回一个连接的组件；
import {connect} from "react-redux";
// react-redux : 将所有的状态和dispatch 转换成当前组件的数性；
class Counter extends React.Component{

    // redux 可以在组件中使用公共的数据；当公共的数据发生改变；不会导致每一个组件发生变化；
    // 1. 强制刷新；这样非常消耗性能；
    // 2. 把公共的数据给了当前的组件的state；通过订阅的方式，订阅了当前设置state的值；只要当前私有的state发生改变；那么页面会重新render；
   /* constructor(){
        super();
        this.state={num:store.getState().counter.num}
    }
    componentDidMount(){
        // 为了 组件重新渲染；
        store.subscribe(()=>{
            this.setState({num:store.getState().counter.num})
        })
    }*/
    render(){
        return <div>
            <button onClick={()=>{
                //点击按钮，派发一个动作；改变store中的state；
                // m:2  payload : 载荷；
                //store.dispatch(actions.add(2))
                this.props.add(6);
            }}>+</button>
            <p>{this.props.num}</p>
            <button onClick={()=>{
                //store.dispatch(actions.min(1))
                this.props.min(10)
            }}>-</button>
        </div>
    }
}
// 在connect中接收两个参数
// mapStateToProps : 把公共数据的state给了当前组件的属性；
// mapDispatchToProps : 把派发的方法给了当前的属性
/*let mapStateToProps = (state)=>{
    // state : store.getState();
    return {n:state.counter.num}
};
let mapDisPatchToProps = (dispatch)=>{
    // dispatch : store.disPatch
    // 最终会将这个对象方放到props上；将dispatch重新包装，包装成一个对象；把这个对象传给当前组件的props属性；
    return {
        add(count){
            dispatch(actions.add(count))
        },
        min(count){
            dispatch(actions.min(count))
        }
    }
}*/
// bindActionsCreators : 将actions最终包装成一个 函数；
/*let bindActionsCreators = ()=>{

}*/
// state : createStore   {counter:{num:99},todo:[]}
/*export default  connect((state)=>({...state.counter}),actions)(Counter);*/


// 1. connect : 函数执行返回一个函数；
// 2.在返回的函数中，把当前组件作为实参传进去；
// 3. connect 自己接受两个参数；第一个是一个函数第一个函数中的state就是store.getState();
// 4.第二个参数传一个对象；这个对象中存储了所有的派发动作的类型；
export default connect((state)=>({...state.counter}),actions)(Counter);
