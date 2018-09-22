import * as Types from "../action-types"
let count = {
    add(m){
        return {type:Types.ADD,num:m}
    },
    min(n){
        return {type:Types.MIN,num:n}
    }
};
export default  count;