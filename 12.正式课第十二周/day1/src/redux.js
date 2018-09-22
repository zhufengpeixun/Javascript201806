// createStore
// 1. 创建容器，存储状态；
// 2. 获取状态的方法 getState
// 3. subscribe
// 4. dispatch
let  createStore=(reducer)=>{// reducer  ： 函数
    let  state;
    let  getState =()=>{
        return JSON.parse(JSON.stringify(state))
    }
    let  listeners = [];
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter(item=>item!=fn);
        }
    }
    let dispatch = (action)=>{
        // action 是一个对象，然后里面有type属性；  payload
        state = reducer(state,action);
        listeners.forEach(item=>item());
    }
    dispatch({});
    return {getState,subscribe,dispatch}
};

// combineReducers: 合并所有属性状态；
let combineReducer =(reducers)=>{
    // 合并reducer；
    // 在counter中派发动作；todo中的reducer执行吗？
     return (state={},action)=>{
         let obj = {};
         for(let key in reducers){
             obj[key] = reducers[key](state[key],action)
         }
         return obj;
     }
};
export {createStore,combineReducer}


