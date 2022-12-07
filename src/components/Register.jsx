import React, { useState } from "react";
import "./CSS/Register.css";

function Register({setShowLogIn, onLogIn}) {
  const [myForm, setMyForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    error: "",
    
  });

  

  const onChangeBinder = (e) => {
    setMyForm((myForm) => ({
      ...myForm,
      [e.target.name]: e.target.value,
    }));
  };
  
  
  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       myForm
      }),
    }).then((r) => {
     
      if (r.ok) {
        r.json().then((user) => onLogIn(user));
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Hey friend, you gotta register!</h2>
          <div className="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              name="username"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={onChangeBinder}
            />
            <small>Error message</small>
          </div>
          <button type="submit">Submit</button>
        </form>
          <p>
              Already have an account?
              <button  onClick={() => setShowLogIn(true)}>
                Log In
              </button>
          </p>
        
      </div>
    </>
  );
}

export default Register;
