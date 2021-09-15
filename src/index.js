import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Reservation extends React.Component {
  constructor(props)  {
    super(props);

    this.state  = { 
      isGoing : true,
      numberOfGuests  : 2
    };

    this.handleInputChange  = this.handleInputChange.bind(this);
  }

  handleInputChange(event)  {
    const target  = event.target;
    const value   = target.type ==  'checkbox'  ? target.checked  : target.value;
    const name    = target.name;

    console.log(name);
    console.log(value);

    this.setState({
      [name]  : value
    });
  }

  render()  {
    return(
      <form>
        <label>
          Is going:
          <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Number of guests:
          <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation  />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
