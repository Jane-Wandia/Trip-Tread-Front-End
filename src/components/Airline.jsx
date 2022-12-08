import React from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import "./CSS/Airline.css";
import { useState, useEffect } from "react";
function Airline({handleClick}) {
  const [airline, setAirline] = useState();
  const [renderProp, setRenderProp] = useState(true)
  useEffect(() => {
    fetch("/airlines")
      .then((r) => r.json())
      .then((res) => setAirline(res));
  }, []);
  console.log(airline);

  // function handleClick(e) {
  //   console.log(e.currentTarget.id);
    
  // }

  return (
    <div className="airline-container">
      {airline &&
        airline.map((item) => (
          <div class="card" key={item.id}>
            {/* <div id="my-img-uniq"> */}
            <img id="my-img-uniq" src={item.image} alt="image not found" />
            {/* </div> */}
            <h3>{item.name}</h3>
            <h4 class="iew">Reviews</h4>
            <Link to="/components/Reviews">
              <button type="submit" id={item.id} class="btn"onClick={handleClick}>Reviews</button>
            </Link>
            
          </div>
        ))}
    
    </div>
  );
}

export default Airline;
