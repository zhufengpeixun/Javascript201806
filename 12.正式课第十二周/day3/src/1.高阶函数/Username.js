import React from  "react";
import Local from "./Local"
///从本地取数据
class Username extends React.Component{
   /* constructor(){
        super();
        this.state = {val:""}
    }
    componentWillMount(){
        // 在render之前获取到本地的数据，当render方法执行时，拿到了最新的数据；
        //console.log(localStorage.getItem("username"));
        this.setState({val:localStorage.getItem("username")})
    }*/
    render(){
        return (<div>
            <input type="text" value={this.props.val} onChange={()=>{}}/>
        </div>)
    }
}
export default   Local("username")(Username)