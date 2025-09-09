// src\components\pagina_login\index.jsx
import React from 'react';  
import './style.css';

export default function Login() {
  return (
    <div className="ring">
      <i style={{ "--clr": "#2600ffff" }}></i>
      <i style={{ "--clr": "#09ff00ff" }}></i>
      <i style={{ "--clr": "#f00707ff" }}></i>
      
      <div className="login">
        <h2>Login</h2>
        
        <div className="inputBx">
          <input type="text" placeholder="Username" />
        </div>
        
        <div className="inputBx">
          <input type="password" placeholder="Password" />
        </div>
        
        <div className="inputBx">
          <input type="submit" value="Sign in" />
        </div>
        
        <div className="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  );
}


