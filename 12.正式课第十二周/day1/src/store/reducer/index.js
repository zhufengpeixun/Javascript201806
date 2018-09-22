// 把合并后的reducer导出去；
import todo from "./Todo";
import counter from "./Counter"
import {combineReducer} from '../../redux';
let reducer = combineReducer({
    todo,counter
});
export  default  reducer;