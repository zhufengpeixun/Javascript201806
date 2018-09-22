// 当前JS存储当前轮播图基础的结果；
import React from "react";
import SliderItems from "./SliderItems";
import SliderArrow from "./SliderArrow";
import SlideDots from "./SliderDots"
export default class Slider extends React.Component{
    constructor(){
        super();
        // 初始化状态0
        this.state = {index:0}
    }
    componentDidMount(){
        // 函数中的this指向当前的实例；
        this.go();
        this.wrapper = document.getElementsByClassName("wrapper")
    }
    turn=(step)=>{
        // 用来解决当前的状态的问题
        // react 轮播图,就是不断改变状态；
        if(this.state.index>2){
            //console.log(this.refs.getSlider);
            this.setState({index:1});
          /*  this.wrapper[0].style.transitionDuration = "left 0s linear";*/
            return;
        }
        if(this.state.index===0){
            this.setState({index:2});
            return;
        }
        this.setState({index:this.state.index+step})
    }
    go=()=>{
        this.timer = setInterval(()=>{
            this.turn(1);
        },2000)
    }
    render(){
        return (<div className="container"
         onMouseOver={()=>{clearInterval(this.timer)}}
                     onMouseOut={()=>{this.go();}}
        >
            <SliderItems images={this.props.images} index={this.state.index}/>
            <SliderArrow turn={this.turn}/>
            <SlideDots images={this.props.images} index={this.state.index} turn={this.turn}/>
        </div>);
    }
}
