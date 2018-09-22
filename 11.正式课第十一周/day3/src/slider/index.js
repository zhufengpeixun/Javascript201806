import React from "react";
import ReactDOM from "react-dom";
import Slide from "./components/Slider"

import './index.css';
let images = [require("./images/1.jpg"),require("./images/2.jpg"),require("./images/3.jpg"),require("./images/1.jpg")];
console.log(images);

ReactDOM.render(<Slide images={images}/>, document.querySelector("#root"))

