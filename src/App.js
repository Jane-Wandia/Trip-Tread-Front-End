import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/components/Login' element={<Login/>} />
              <Route path='/home' element={<Airline/>} />
              <Route path='/components/About' element={<About/>} />
              <Route path='/components/Reviews' element={<Reviews/>} />
              <Route path='/components/Contact' element={<Contact/>} />
              <Route path='/components/Register' element={<Register/>}/>
              <Route path='/components/Airline' element={<Airline/>}/>
              <Route path='/components/ReviewForm' element={<ReviewForm/>}/>
            </Routes>
          <Footer />
        </Router>
        
      </div>
      
  );
}

export default App;
