//  defaultProps   constructor  componentWillMount  render   componentDidMount

// 属性和状态：
// 当数据更新时： shouldComponentUpdate   componentWillUpdate   render   componentDidUpdate

// 当父组件props更新，子组件也会随着更新
// componentWillReceiveProps   shouldComponentUpdate   componentWillUpdate   render   componentDidUpdate


// redux : 统一的数据管理；
// createStore

// getState   : 拿数据
// subscribe  ：订阅
// dispatch  :

// {counter:{num:10},todo:{todo:[]}}

/*let  combineReducer =(redu)=>{
    // 如果函数的形参没有实参，或者是undefined，那么会走参数的默认值；
    return (state={},action)=>{
        let obj = {};
        for(let key in redu){
           obj[key] =  redu[key](state[key],action)
        }
        return  obj;
    }
};
let reducer = combineReducer({
    counter:counter,
    todo:todo
})
createStore(reducer);*/


//createStore   combineReducer

// store.dispatch({type:ADD,text:1})==调用了reducer,并且让事件池中所有的方法执行==> reducer返回一个最新的状态，更改全局的state；


// react-redux : 解决了组件数据的更新；

