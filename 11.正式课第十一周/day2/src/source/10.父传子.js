import React from "react";
import ReactDOM from "react-dom";
// 父传子
class Header extends React.Component{
           render(){
               return (<h1>
                   <p>{this.props.data}</p>
               </h1>)
   }
}
class Panel  extends React.Component{
    render(){
        return (<div className="container">
            {this.props.news}
            <Header {...this.props} data={this.props.min}/>
        </div>)
    }
}
let data = {
    news:"快下课了",
    min:"拖几分钟啊"
}
ReactDOM.render(<Panel  {...data}/>,document.querySelector("#root"));

