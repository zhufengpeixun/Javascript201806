import * as Types from "../action-types";
function todo(state=[1,2],action) {
    switch (action.type){
        case Types.ADD_TODO:
            // state==> [] 把input框的值和state中原有的数组合并到一起；
            return [...state,action.text]
    }
    return  state;
}
export default todo;
