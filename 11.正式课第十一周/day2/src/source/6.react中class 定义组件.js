// 1. function
// 2.class  : 定义一个类
import React,{Component} from "react";
import ReactDOM from "react-dom";


// class 定义一个组件；
// 1.通过class来定义一个组件 ，需要继承React上的Component这个类
// 2. 在定义组件的原型上必须有一个render函数；而且这个函数必须返回一个顶级的JSX元素；

// 在react中分为自定义组件和内置组件；一个自定义一组件需要返回一个内置的组件；
// 内置的组件： div  h1   ul  li  span
// 通过class定义的组件，先执行constructor，再执行render；那么这两个函数中的this都执行当前的实例；在当前的实例上有一个props属性，该属性拿到了父组件中行间属性；


// class定义一个组件和function有什么区别：
// class 定义组件具有this, 状态，还有生命周期；
// 组件中的数据来源于属性和state，属性和state发生改变，视图就会发生变化；
class Header extends Component{
    render(){
        return <div>
            {this.props.content}
        </div>
    }
}
class Hello extends Component{
    // 先执行
    constructor(){
        //在这个函数中，不能使用props中的数据；this.props是undefined；
        super();
        console.log(1);
        console.log(this);
        console.log(this.props);
        this.a =99;
    }
    render(){
        console.log(17);
        console.log(this);
        return <div>
                    <Header content="现在是北京时间："></Header>
                    {this.props.data.toLocaleString()}
                </div>
    }
}
// 1.ReactDOM.render : 首先找到组件对应的这个类；并且new 一下这个类；
// 2.通过这个实例又找到当前类原型上的render函数；让render执行；
// 3.ReactDOM .render 接受到原型上render中return的虚拟的DOM
// 4.将其转换真实的DOM，插入到页面中；
ReactDOM.render(<Hello data={new Date()} class="a"/>, document.querySelector("#root"));

