import React from 'react'
import './CSS/Login.css';

function Login() {
  return (
    <div className='login-box'>
      <h2>Login</h2>
      <form>
        <div className='user-box'>
          <input type='text' name='' required=''></input>
          <label>Username</label>

        </div>
        <div className='user-box'>
          <input type='text' name='' required=''></input>
          <label>Password</label>
          
        </div>
      </form>
      </div>
  )
}

export default Login;