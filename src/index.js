import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Toggle extends React.Component  {
  constructor(props)  {
    super(props);

    this.state  = {isToggleOn : true};

    // Syntax to defien the function
    this.handleClick  = this.handleClick.bind(this);
  }

  handleClick() {
    // Update the value/state of the isToggleOn
    // this.setState(prevState =>  ({
    //   isToggleOn : !prevState.isToggleOn
    // }));
    console.log('this is', this);
  }

  render()  {
    return  (
      // <button onClick={this.handleClick}>
      //   {this.state.isToggleOn  ? 'ON'  : 'OFF'}
      // </button>
      <button onClick={() =>  this.handleClick()}>
         {this.state.isToggleOn  ? 'ON'  : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle  />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
