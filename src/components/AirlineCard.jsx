import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Airline.css";

function AirlineCard ({airline}) {
    const airline_id = airline.id

    return (
        <div className="card">
            <img id="my-img-uniq" src={airline.image} alt="image not found" />
            <h3>{airline.name}</h3>
            <h4 class="iew">Reviews</h4>
            <Link to="/components/Reviews" state={{ airline_id: airline_id }} class="btn" >Reviews</Link>
        </div>
    )
}

export default AirlineCard