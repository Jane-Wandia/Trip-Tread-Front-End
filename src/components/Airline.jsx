import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Airline.css";
import { useState, useEffect } from "react";
function Airline() {
  const [airline, setAirline] = useState();
  useEffect(() => {
    fetch("/airlines")
      .then((r) => r.json())
      .then((res) => setAirline(res));
  }, []);
  console.log(airline);
  // console.log(airline)
  // {errors.length > 0 && (
  //   <ul style={{color: "red"}}>
  //     {errors && errors.map((item) => (
  //       <li key={item}>{item}</li>
  //     ))}
  //   </ul>
  // )}

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
              <button class="btn">Reviews</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Airline;
