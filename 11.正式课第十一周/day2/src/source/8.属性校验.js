import React,{Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class School  extends  Component{
    constructor(props){
        super();
        console.log(props);// 对象；把行间属性封装到一个对象中
        console.log(this.props);// undefined
        props.data.name="123";
        // 如果需要对属性进行更改，可以在在constructor进行修改；
        // 但是不能改变整个空间；
    }
    render(){
        return <div>
                    <p>{this.props.data.name}</p>
                </div>
    }
}
let obj  = {name:"张三",age:12};
ReactDOM.render(<School data={obj} mn="aa"/>,document.getElementById("root"));


// 属性的校验

/*class Head extends Component{
    // defaultProps :在类上定义默认的属性；
    // 如果传递了行间属性，那么不会显示默认的属性；
    static propTypes = {
        // 要求是一个数字类型的；
        // 可以去propTypes模块中readME 文件中去查看；
        age:PropTypes.number.isRequired
    }
    static defaultProps = {
        name:"京东",
        age:16
    }
    render(){
        return <div>
                    <p>{this.props.name}{this.props.age}</p>
                </div>
    }
}
let person = {name:"回龙观"};
ReactDOM.render(<Head {...person}/>,document.getElementById("root"));*/


