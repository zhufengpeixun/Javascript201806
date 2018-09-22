import {createStore} from "redux";
import reducer from "./reducer/index"
let  store = createStore(reducer)
export default store;