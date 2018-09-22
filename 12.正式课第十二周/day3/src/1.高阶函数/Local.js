import React from "react";
let Local =(key)=>(Component)=>{
   return class A extends React.Component{
       constructor(){
           super();
           this.state = {val:""}
       }
       componentWillMount(){
           let value = localStorage.getItem(key);
           this.setState({val:value})
       }
       render(){
            return <Component {...this.state}/>
       }
   }
};
export default Local;
