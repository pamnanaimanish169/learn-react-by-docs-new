import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// className LoginControl  extends React.Component {
//   constructor(props)  {
//     super(props);

//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick  = this.handleLogoutClick.bind(this);
//     this.state  = {isLoggedIn : false};
//   }

//   handleLoginClick()  {
//     this.setState({isLoggedIn : true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn : false});
//   }

//   render()  {
//     const isLoggedIn  = this.state.isLoggedIn;
    
//     let button;

//     if(isLoggedIn)  {
//       button  = <LogoutButton onClick={this.handleLogoutClick} />
//     } else  {
//       button  = <LoginButton  onClick={this.handleLoginClick} />
//     }

//     return  (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function  UserGreeting(props) {
//   return  <h1>Welcome back!</h1>
// }

// function  GuestGreeting(props)  {
//   return  <h1>Please sign up.</h1>
// }

// function  Greeting(props) {
//   const isLoggedIn  = props.isLoggedIn;
//   if(isLoggedIn)  {
//     return  <UserGreeting />;
//   }
//   return  <GuestGreeting  />;
// }

// function  LoginButton(props)  {
//   return  (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function  LogoutButton(props) {
//   return  (
//     <button onClick={props.onClick}>Logout</button>
//   );
// }

// class Header extends React.Component {
  
//   constructor(props)  {
//     super(props);

//     this.handleLogin  = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);

//     this.state  = {isLoggedIn : false};
//   }

//   // handle Login functionality
//   handleLogin() {
//     console.log('handle login click');
//     this.setState({isLoggedIn : true});
//   }

//   // handle Logout functionality
//   handleLogout()  {
//     console.log('handle logout click');
//     this.setState({isLoggedIn : false});
//   }

//   render(props) {

//     let dropdown  = '';
//     const isLoggedIn  = this.state.isLoggedIn;

//     console.log(isLoggedIn);

//     if(isLoggedIn)  {
//       dropdown  = 
//       <div className="dropdown">
//         <button className="dropbtn">Dropdown 
//           <i className="fa fa-caret-down"></i>
//         </button>
//         <div className="dropdown-content">
//           <a href="#">My Profile</a>
//           <a href="#">Transactions History</a>
//           <a href="#" onClick={this.handleLogout}>Logout</a>
//         </div>
//       </div> ;
//     } else  {
//       dropdown  = 
//       <a onClick={this.handleLogin}>Login</a>;
//     }

//     return(
//       <div>
//         <div className="navbar">
//           <a>Home</a>
//           <a>News</a>
//           {dropdown}
//       </div>
//       </div>
//     )
//   }
// }

function  MailBox(props)  {
  const unreadMessages  = props.unreadMessages;

  return  (
    <div>
      <h1>Hello!</h1>
      {
      unreadMessages.length  > 0 &&  
      <h2>
        You have {unreadMessages.length}  unread messages.
      </h2>
      }
    </div>
  );
}

const messages  = [
  'React',  'Re:React', 'Re:Re: React ', 'La, Ola'
];

ReactDOM.render(
  <MailBox  unreadMessages={messages} />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
