import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Reviews from "./components/Reviews"
import Contact from "./components/Contact";
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import Footer from "./components/Footer";
import Register from "./components/Register";
import Airline from "./components/Airline";
import ReviewForm from "./components/ReviewForm";
import AirlineCard from "./components/AirlineCard";

function App() {

  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
  
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogIn={setUser} />;
  
  return (
      <div>
        <Router>
          <Navbar user={user} setUser={setUser} />
            <Routes>
              <Route path='/' element={<Home/>} />
              
              <Route path='/components/home' element={<Airline />} />
              <Route path='/components/About' element={<About/>} />
              <Route path='/components/Reviews' element={<Reviews user={user} />} />
              <Route path='/components/Contact' element={<Contact/>} />
              <Route path='/components/Register' element={<Register/>}/>
              <Route path='/components/AirlineCard' element={<AirlineCard/>}/>
              <Route path='/components/ReviewForm' element={<ReviewForm/>}/>
            </Routes>
          <Footer />
        </Router>
        
      </div>
      
  );
}

export default App;
