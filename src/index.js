import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return  user.firstName  + ' ' + user.lastName;
}

const user  = {
  firstName   : 'Harper',
  lastName    : 'Perez'
};

const element = (

  <div>
    <label>Name:</label>
    <input type="text" placeholder="Enter Name" id="name" name="name"/>
    <br />
    <label>Age:</label>
    <input type="number" placeholder="Enter Age" id="age" name="age"/>
    <br />
    <label>Gender:</label>
    <input  type="text" placeholder="Enter gender" id="gender" name="gender" />
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
