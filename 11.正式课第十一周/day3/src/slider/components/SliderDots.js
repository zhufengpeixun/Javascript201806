import React from "react";
export default class SliderDots extends  React.Component{
    render(){
        return (<div className="slider-dots">
            {this.props.images.map((item,index)=>{
                if(index===this.props.images.length-1){
                    return null;
                }
                return <span className={this.props.index===index?"active":""} key={index}  onClick={()=>{this.props.turn(index-this.props.index)}}></span>
            })}
        </div>)
    }
}