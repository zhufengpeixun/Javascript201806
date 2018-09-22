// 子组件改变父组件中的状态；需要在父组件订阅一个方法，当子组件的行为触发时，可以触发父组件的方法；所以需要把父组件方法传递给子组件；
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"

class Panel extends  React.Component{
    static defaultProps={
        a:1
    }
    constructor(props){
        // 在执行constructor : 已经把默认的属性放到了props中；
        super();
        // 一般在constructor初始化自己的状态
        console.log(props);
        this.state={color:"success"}
    }
    changeColor=(color)=>{
        //把这个函数的空间传递给了子组件，那么子组件可以触发调用这个函数；
        this.setState({color:color})
    }
    render(){
            return <div className="container">
                <div className="row">
                    <div className={"panel panel-"+this.state.color}>
                        <div className="panel-heading">
                            <Header header={this.props.head}  color={this.changeColor}/>
                        </div>
                    </div>

                </div>
            </div>
    }
}

class Header extends  React.Component{
    change=()=>{
        this.props.color("danger")
    }
    render(){
        // 点击button时，改变父组件的背景颜色； 只需要改变父组件中的状态就可以了；
        return <div>
            {this.props.header}
            <button onClick={this.change}>变色</button>
        </div>
    }
}

ReactDOM.render(<Panel head="100"/>,document.querySelector("#root"))



