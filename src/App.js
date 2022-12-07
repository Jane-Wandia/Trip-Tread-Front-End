import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Airlines from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Reviews from "./components/Reviews"
import Contact from "./components/Contact";
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/components/Login' element={<Login/>} />
              <Route path='/components/About' element={<About/>} />
              <Route path='/components/Reviews' element={<Reviews/>} />
              <Route path='/components/Contact' element={<Contact/>} />
            </Routes>
          <Footer />
        </Router>
      </div>
      
  );
}

export default App;
