import * as Types from "../action-types";
let action = {
    // todo接收一个输入框中的内容；
    add(todo){
        return {type:Types.ADD_TODO,todo:todo}
    },
    delete(id){
        return {type:Types.DELETE_TODO,id:id}
    },
    change(id){
        return {type:Types.CHANGE_TYPE,id:id}
    },
    changeTodo(val){
        // 告诉我改成什么值；
        return {type:Types.CHANGE_TODO,val:val}
    }
}
export default action;
