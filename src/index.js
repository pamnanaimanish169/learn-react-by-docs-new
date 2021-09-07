import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Clock(props) {
//   return(
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// Convert function(Clock()) to class(class Clock)
// class Clock extends React.Component {
  
//   // Add a class **constructor** that assigns the initial this.state.
//   constructor(props)  {
//     super(props);
//     this.state  = {date : new Date()};
//   }

//   componentDidMount() {
//     this.timerID  = setInterval(
//       ()  =>  this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount()  {
//     clearInterval(this.timerID);
//   }

//   tick()  {
//     this.setState({
//       date  : new Date()
//     });
//   }

//   render() {
//     return(
//       <div>
//         <h1>Hello, World!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     ) 
//   };
// }

class Name extends React.Component {

  // constructor
  constructor(props) {
    super(props);

    // Initial state.
    this.state  = { name  : "Manish", address : "Malviya Nagar", city : "Jaipur", state : "Rajasthan"  };
  }

  // componentWillMount
  componentWillMount()  {
    setTimeout(() =>  {
      this.setState({ name  : "Pralave",  address : "Jagatpura", city : "Jaipur", state : "Rajasthan" });
    },500);
  }

  // componentWillUnMount
  componentWillUnmount()  {
    // This is to save the memeory leaks so that this variable is destroyed when the we move on to 
    // another component.
    this.setState({ name  : "" });
  }

  render()  {
    return(
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.name}</h2>
        <p> <b>Address</b>  {this.state.address}</p>
        <p> <b>City</b> {this.state.city}</p>
        <p> <b>State</b> {this.state.state}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Name  />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
