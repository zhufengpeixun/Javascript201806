import React from "react";
import Nav from "../components/Nav"
export  default  class App  extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>

        </div>
    }
}
