import React from "react";
import "./CSS/Login.css";

function Login() {
  return (


    <div className="login-box">
      <h2>Login</h2>
      <form>
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
      </form>
      <a href="#" className="link-btn">Don't have an account? Register here.</a>
    </div>
  );

}

export default Login;
