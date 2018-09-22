import React from "react";
import {connect} from "react-redux";
import action from "../store/action"
// react-redux 需要O导出一个链接后的组件
 class Counter extends React.Component{
  render(){
        return <div onClick={()=>{
            //store.dispatch({type:"ADD",text:2})
            this.props.add(2)
        }}>
            {store.getState().counte.num}
            {this.props.num}
        </div>
  }
}
// connect会把全局的状态和dispatch这些方法遍历到当前组件的props属性上；
//mapStateToProps
//mapDispatchToProps
// connect : 第一个参数是函数
// 第二个参数是一个对象；
let mapDispatchToProps=(dispatch)=>{
    //dispatch : store.dispatch
    return {
        add:(count)=>{
            dispatch(action.add(count))
        }
    }
};
// 在connect中，传进去一个action，那么会默认调用一个bindActionCreators; 拿到action之后，进行包装处理，返回一个函数，那么这个返回一个对象那个，在connect最终会将这个对象上的属性挂载当前组件的props上；

// 在connect中有一个函数bindActionCreators；将action的对象变成一个函数；
let bindActionCreators=(action)=>{
    return  (dispatch)=>{
        //dispatch  :store.dispatch
        let obj = {};
        for(let key  in action){
            obj[key] =(...arg)=>{
                dispatch(action[key](...arg))
            }
        }
        return obj;
    }
};
export default  connect((state)=>({...state.counter}),action)(Counter);


