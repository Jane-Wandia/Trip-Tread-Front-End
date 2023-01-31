
import React from "react";
import "./CSS/Home.css";
import {Link} from 'react-router-dom';

function Home(props) {
  return (
    <div className="hero-container">
      <div className="hero-image">
        {/* <img
          src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1670491272/pexels-asad-photo-maldives-2245277_i0gbs2.jpg"
          alt="image tag"
        /> */}
      </div>
      <div className="preview"></div>
      <div className="herosection-content">
        <h2>Want to Fly</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div>
          {/* <button
            className="link-btn"
            onClick={() => props.onFormSwitch("Home")}
          >
            Go to Airlines
          </button> */}
          <Link to="/components/Home">
             <button className="link-btn">Go to Airlines</button>
             </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
