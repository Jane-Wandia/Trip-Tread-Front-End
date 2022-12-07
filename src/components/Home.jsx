import React from 'react'
import './CSS/Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>Home
      <Link to="/home">Home</Link>
    </div>
  )
}

export default Home;