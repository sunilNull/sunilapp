import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const img1 = "https://picsum.photos/250/300"
const img2 = "https://picsum.photos/275/300"
const img3 = "https://picsum.photos/300/300"
const img4 = "https://picsum.photos/350/300"

const heading = {
    color : "blue",
    textAlign : "center",
    textTransform : "capitalize",
    textShadow : "1px 2px 3px blueviolet",
    margin : "100px 0px",
    fontFamily : "'Lobster', cursive"
  }
ReactDOM.render(
    <>
        <h1 style={heading}>My name is sunil shrimali.</h1>
        <div class="img_div">
            <img src={img1} alt="random picture" />
            <img src={img2} alt="random picture" />
            <img src={img3} alt="random picture" />
            <img src={img4} alt="random picture" />
        </div>
    </>,
    document.getElementById('root')
);