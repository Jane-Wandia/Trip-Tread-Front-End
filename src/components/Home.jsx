import React from "react";
import "./CSS/Home.css";

function Home(props) {
  return (
    <div className="home-container">
      <div className="heading-container">
        <h2>Want to Fly</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div>
        <button className="link-btn" onClick={() => props.onFormSwitch("Home")}>
          Go to Airlines
        </button>
      </div>
    </div>
  );
}
export default Home;
