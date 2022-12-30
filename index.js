// var React = require('react');
import React from 'react';

// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
 import "./index.css";
const fname = " Yash";
const lname = "Guptaa..";

// inline css
const p = { 
    color : '#fa9191',
    textAlign : 'center',
    fontSize :'50px',
    textShadow : "0px 6px 4px #ffe9c5"
}

const currDate = new Date().toLocaleDateString();
const currtime= new Date().toLocaleTimeString();

const img ="https://picsum.photos/200/300";
const img1="https://picsum.photos/200";
const img2="https://picsum.photos/200/200";
// ReactDOM.render('Kya Dikhana hai' , 'kha dikhana hai ' , 'callback function');
ReactDOM.render(
    <>
        <h1 className='heading'> NetFlix Wellcome -- {fname} {lname} </h1>
        {/* es6 template litrals - accieve using backtik ` */}
        <h2 >{`My name is ${fname} ${lname}`}</h2>
        {/* inline css add kri h , phla braket adding in jsx , dusra css */}
        <p style = {p}>plz say Hello</p> 
        <h2> say hii</h2>
        <h4>2 + 3 is : {2+3}</h4>

        <p>My Lucky number is {Math.random()*10}</p>
        --------------------------------------------------
        <p>Current date is : {currDate}</p>
        <p>Current time is : {currtime}</p>
        <p>-------------------------------------------------------------------------------------------------------------------------</p>
        <div className='img'>
        <img src={img}  height="200px" width="150px" alt="this is relate to random image"/>
        <img src={img1}  height="200px" width="150px" alt="this is relate to random image"/>
        <img src={img2}  height="200px" width="150px" alt="this is relate to random image"/>
        </div>
    </>, 
            document.getElementById("root"));     // inside h1 tag its not a html its called a JSX