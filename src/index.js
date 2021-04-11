import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const curTimeHour = new Date().getHours();
var greetTxt = '';
var greetStyle = {
    fontWeight : "bold"
};

if(curTimeHour >= 1 && curTimeHour < 12) {
    greetTxt = "Good Morning";
    greetStyle.color = "green";
}
else if (curTimeHour >= 12 && curTimeHour < 19) {
    greetTxt = "Good Afternoon";
    greetStyle.color = "orange";
}
else {
    greetTxt = "Good Night";
    greetStyle.color = "blue";
}
ReactDOM.render(
    <>
        <div className="container">
            <p className="greetmsg">
                Hello sir, <span style={greetStyle}>{greetTxt}</span>
            </p>
        </div>
    </>,
    document.getElementById('root')
);