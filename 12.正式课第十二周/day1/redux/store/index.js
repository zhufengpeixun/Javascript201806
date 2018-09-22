import {createStore,combineReducers} from "../redux";
// 两个参数
// 第一个是state；第二个是action；
// 只要createStore中的dispatch执行，那么这个reducer就会执行；
// reducer : 返回一个新的状态
// 根据action中不同的type值，返回不同的状态；
function counter(state={num:0},action) {
    //
    switch (action.type){
        // 如果类型是add ; 那么执行加的操作
        case "add" :
            return {num:state.num+action.m};
        case "min":
            return {num:state.num-action.m}
    }
    // 这个return的state，目的是初始化createStore 的state值；
    return state;
}
function todo(state=[],action) {
    switch(action.type){
        case "add_todo":
            return [...state,action.content]
    }
    return state;
}
// redux : 提供一个createStore    combineReducers

// creatstore   combineReducers
// 对所有的管理员合并；
let reducers = combineReducers({
    counter:counter,
    todo:todo
});
let store = createStore(reducers);
export default store;