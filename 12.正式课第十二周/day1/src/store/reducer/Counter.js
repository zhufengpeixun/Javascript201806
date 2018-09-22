import * as Types  from "../action-types"
function counter(state={num:99},action) {
   switch (action.type){
       case Types.ADD:
           return {num:state.num+action.num};
       case Types.MIN:
           return {num:state.num-action.num}
   }
   return state;
}
export default counter;