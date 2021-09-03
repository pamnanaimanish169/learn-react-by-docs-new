import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const currentTime = new Date();
const futureDate  = new Date(2021,8,3,17);
const timeRemaining = Math.abs((currentTime - futureDate)).toString();

const element = (

  <div>
    <h1>Current time is {currentTime.toString()}</h1>

    <h1>Future date is {futureDate.toString()}</h1>

    <h1>Difference is {( (currentTime - futureDate).toString() )} in milliseconds</h1>

    <h1>{Math.ceil(timeRemaining  / 1000) } in seconds</h1>

    <h1>{ Math.ceil(timeRemaining  / (1000 * 60))} in minutes</h1>

    <h1>{ Math.ceil(timeRemaining  / (1000 * 60 * 60) )} in hours</h1>
    
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
