import React from 'react'
import './CSS/Home.css'
import {Link} from 'react-router-dom';

function Home(props) {
  return (
    <div className='home'>
      <video autoPlay loop muted></video>
      <video src="https://res.cloudinary.com/dx3m4nqgs/video/upload/v1670411211/Pexels_Videos_2823622_egsazv.mp4">
      </video>
      <div className='content'>
            <h2>Welcome to Trip Tread</h2>
            <Link to='/components/home'>
             <button className="link-btn">Go to Airlines</button>
             </Link>

      </div>
    </div>


  )
}
export default Home;