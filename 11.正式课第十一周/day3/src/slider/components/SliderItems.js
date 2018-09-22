import React from "react";
export default class SliderItems extends  React.Component{
    render(){
        console.log(this.props.index);
        let style;
        if(this.props.index>2){
            style={
                left :0+"px",
            }
        }else{
            style = {
                left :-this.props.index*400+"px",
                transition:"left 0.5s linear"
            }
        }
        // 通过map循环创建
        return (<ul ref="getSlider"  className="wrapper" style={style}>
            {this.props.images.map((item,index)=>{
                return (<li key={index} className="slider">
                    <img src={item} alt=""/>
                </li>)
            })}
        </ul>)
    }
}