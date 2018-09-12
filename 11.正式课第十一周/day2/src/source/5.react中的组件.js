// react中定义组件有两种定义方式；
// react元素 是react组件的最基本的组成单位
// 导入React 和ReactDOM；
// 定义组件的要求：
// 1. 组件的名字首字母必须大写；为了和react元素进行区分；
// 2.组件定义后，可以像一个JSX元素使用；
// 3. 组件定义，必须要return一个顶级JSX元素，而且是唯一的；
import  React  from "react";
import ReactDOM from "react-dom";
let  h = <div></div>;
//React.createElement("h1",null,"hello");


// 1.函数定义组件；
/*function Welcome(props) {
    return  <div>1234
                <p>{props.data.name}{props.age}</p>
            </div>;
}
// 可以采用单闭合的标签；
ReactDOM.render(<Welcome data={{name:1,hh:19}}  age="100"/>,document.getElementById("root"));*/

function Welcome(props) {
    // props  也是一个对象
    console.log(props);
    return  <div>1234
        <p>{props.data.toLocaleString()}{props.age}</p>
    </div>;
}
// 可以采用单闭合的标签；
// render ：根据第一个参数的类型执行不同的操作；
// 1.当render执行时，首先会把当前组件的属性进行打包封装，把其封装一个对象；并且把这个对象传递给对应的函数（组件）；
// 2. 让这个组件对应的函数执行，函数会返回一个虚拟的react元素；
// 3.当render得到react元素，会把其转成真实的DOM元素，并且插入到真实的DOM中；
ReactDOM.render(<Welcome data={new Date()}  age="100"/>,document.getElementById("root"));
