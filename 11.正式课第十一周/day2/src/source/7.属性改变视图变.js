import React from "react";
import ReactDOM from "react-dom";
/*function Welcome(props){
    return <div>
        {props.time.toLocaleString()}
    </div>
}
// 属性可以影响视图；

setInterval(function () {
    ReactDOM.render(<Welcome time={new Date()}/>,document.getElementById("root"));
},1000);*/

function Welcome(props){
    console.log(props);
    /*return <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
    </div>*/
    let {name,age}= props;
    return <div>
        <p>{name}</p>
        <p>{age}</p>
    </div>
}
let school = {
    name:"zfpx",
    age:9
}
    //ReactDOM.render(<Welcome data={school}/>,document.getElementById("root"));
// 通过... 展开运算符，把数据直接绑定给props,可以通过props直接获取其中的属性；
ReactDOM.render(<Welcome {...school}/>,document.getElementById("root"));



