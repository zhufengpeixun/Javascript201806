import React from  "react";
///从本地取数据
import Local from "./Local"
class Password extends React.Component{
  /*  constructor(){
        super();
        this.state = {val:""}
    }
    componentWillMount(){
        this.setState({val:localStorage.getItem("password")})
    }*/
    render(){
        return (<div>
            <input type="text" value={this.props.val} onChange={()=>{}}/>
        </div>)
    }
}
export default   Local("password")(Password)