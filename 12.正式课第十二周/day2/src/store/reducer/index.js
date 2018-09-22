// 这是一个todo的reducer；
import {combineReducers} from "redux";
import * as Types from "../action-types";
// reducer : 两个参数
// 根据不同的类型；返回不同的状态；
let initState = {
    // 如果全局的types是all:显示所有的任务
    // 如果全局的types是finish，显示的完成
    // 如果全局的types是unfinish;显示未完成；
    types:"all",
    todos :[{id:1,isSelected:true,title:"今天会下雨吗？"},{id:2,isSelected:false,title:"十一爬山"}]
};

function todo(state=initState,action) {
    //
    switch (action.type){
        case Types.ADD_TODO:
            return {...state,todos:[...state.todos,action.todo]}
        case Types.DELETE_TODO:
            return {...state,todos:state.todos.filter((item)=>item.id!==action.id)};
        case Types.CHANGE_TYPE :
            let todos = state.todos.map((item)=>{
                // 循环找到这一项；然后把其中的isSelected属性改成和之前相反的状态；
                if(item.id===action.id){
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            return {...state,todos:todos}
        case  Types.CHANGE_TODO:
            return {...state,types:action.val}
    }
    return state;
}
let reducer = combineReducers({todo});
export default reducer;

