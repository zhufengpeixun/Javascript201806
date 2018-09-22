// action中的文件  导出一个对象；对象中都是一个函数，函数返回一个对象
import * as Types from "../action-types";
let todo = {
    addTodo(content){
        return {type:Types.ADD_TODO,text:content}
    }
};
export default todo;
