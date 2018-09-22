import React from "react";
export default class SliderArrow extends  React.Component{
    render(){
        return (<div className="slider-arrow">
            <span className="left" onClick={()=>{this.props.turn(-1)}}>&lt;</span>
            <span className="right" onClick={()=>{this.props.turn(1)}}>&gt;</span>
        </div>)
    }
}