// redux : 统一数据管理；
// redux如何改变状态的这个过程；
// 理解redux中createStore 中的代码
let createStore=(reducer)=>{
    let  state;
    // {counter:{num:0},todo:[]}
    // 返回当前作用域下的state的状态；
    let getState = ()=>{
        return JSON.parse(JSON.stringify(state));
    };
    let listener = [];// 存储了方法或事件；
    let subscribe=(fn)=>{
        listener.push(fn);
        // subscribe的返回值，可以取消订阅一个函数；
        return ()=>{
            listener = listener.filter(item=>item!==fn);
        }
    };
    // dispatch 需要传一个对象；对象中有一个属性type属性；
    let dispatch =(action)=>{
        // reducer : 返回一个新的状态，并且把当前store中的状态直接覆盖；
        // 根据不同的type类型，返回不同的状态；
        state = reducer(state,action);
        // 让所有订阅的函数执行；
        listener.forEach(item=>item());
    };
    // 为了给state初始值；
    dispatch({});
    return {getState,dispatch,subscribe}
};
let combineReducers = (reducers)=>{
    // 返回的函数最中返回一个对象 state={counter:{num:0},todo:[]}
    return (state={},action)=>{// {type:"add",m:2}
        let  obj = {};
        for(let key  in reducers){
            // 1. key ： counter
            //obj[key] = state;
            // 2.key  todo
            // 新增键值对；
            obj[key] = reducers[key](state[key],action)
        }
        // {counter:{num:0},todo:[]};
        return obj;
    }
}
export {createStore,combineReducers}





