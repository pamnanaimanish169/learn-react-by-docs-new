import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function  FancyBorder(props)  {
  return  (
    <div  className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function  Dialog(props)  {
  return  (
    <FancyBorder  color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p  className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

class Signup extends  React.Component {
  constructor(props)  {
    
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.state  = { login : ''  };
  }

  render()  {
    return  (
      <Dialog 
      title="Mars Exploration Program"
      message="How should we refer to you?"
      >
        <input 
        value={this.state.login}
        onChange={this.handleChange}
        />

        <button onClick={this.handleSignUp}>
          Sign me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login  : e.target.value});
  }

  handleSignUp()  {
    alert(`Welcome aboard,  ${this.state.login}!`);
  }
}

ReactDOM.render(
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
