import React from "react";
import "./CSS/Login.css";

function Login() {
  return (


    <div className="login-box">
      <form className="form">
      <h2>Login</h2>
        <div className="user-box">
          <input type="text" name="" required=""></input>
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required=""></input>
          <label>Password</label>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      <a href='/components/Register' className="link-btn">Don't have an account? Register here.</a>
      </form>
    </div>
  );

}

export default Login;
