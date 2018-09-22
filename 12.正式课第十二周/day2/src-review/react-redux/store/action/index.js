import * as Types from "../action-types"
let  action = {
    add(count){
        return {type:Types.ADD,text:count}
    }
};

export default action
