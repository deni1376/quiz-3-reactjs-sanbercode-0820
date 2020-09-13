import React from 'react';
import logo from '../public/img/logo.png'
import './login.css'

class Login extends React.Component {
  render() {
    return (
     <div>
         <h2 style={{textAlign:"center"}}>Login Form</h2>
         <form>
    <img src={logo} alt="sanbercode" class="sanbercode"></img>
    <div style={{textAlign:'center'}}>
    <label for="uname"><b>Username:</b></label>
    <br/>
    <input type="text" placeholder="Enter Username" name="uname" required></input>
    <br/>
    <br/>
    <label for="psw"><b>Password:</b></label>
    <br/>
    <input type="password" placeholder="Enter Password" name="psw" required></input>
    <br/>
    <br/>
    <button type="submit">Login</button>
    </div>
    
    
         </form>

     </div>
  );
}
}
export default Login