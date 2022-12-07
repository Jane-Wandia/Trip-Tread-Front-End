import React, { useState } from "react";
import Register from "./Register";

import "./CSS/Login.css";

function LoginForm({ onLogIn }) {
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    error: "",
    
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showLogIn, setShowLogIn] = useState(true);
  
 

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, password }),
    }).then((r) => {
      setIsLoading(false);
      
      if (r.ok) {
        
        r.json().then((user) => onLogIn(user));

      } else {
        r.json().then((err) => setErrors({error:err["error"]}));
      
      }
    });
  }

  return (
      <>
      
      {showLogIn ? (
        <div className="login-box">
        < h2>Login</h2>
            <>
            <form onSubmit={handleSubmit}>
            <div className="user-box">
              <label>Username</label>
              <input type="text" onChange={(e) => setFullName(e.target.value)}></input>
            
            </div>
            <div className="user-box">
              <label >Password</label>
              <input type="password" name="" required="" onChange={(e) => setPassword(e.target.value)}></input>
            
            </div>
            <button className="submit-btn" type="submit">
              {isLoading ? "Loading..." : "Login"}
             </button>
             {/* <p "color:white;">{errors.error}</p> */}
            
            <p className="link-btn">
                Don't have an account? 
            <button className="link-btn" onClick={() => setShowLogIn(false)}>
                Sign Up
            </button>

            </p>
            </form>
            </>
         
      </div>
      )
      : (
        <>
          <Register onLogIn={onLogIn} setShowLogIn={setShowLogIn}/>
        </>
      )}    
      </>
    
  );
}

export default LoginForm;
























// function LoginForm() {
//   return (

//     <>
//       <div className="login-box">
//       
//       <form>
//         <div className="user-box">
//           <input type="text" name="" required=""></input>
//           <label>Username</label>
//         </div>
//         <div className="user-box">
//           <input type="text" name="" required=""></input>
//           <label>Password</label>
//         </div>
//         <button className="submit-btn" type="submit">
//           Submit
//         </button>
//       </form>
//       <a href='/components/Register' className="link-btn">Don't have an account? Register here.</a>
//     </div>
//     </>
  
//   );

// }

// export default LoginForm;
