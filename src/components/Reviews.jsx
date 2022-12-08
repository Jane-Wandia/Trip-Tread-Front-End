import React from "react";
import "./CSS/Reviews.css";
import { useState, useEffect } from "react";
import Airline from "./Airline";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([])
  useEffect (()=>{
    fetch ("/reviews")
    .then((res) => res.json())
    .then((res)=> setReviews(res))
  },[])

  console.log(reviews) 

  function handleClick(e) {
    console.log(e.target.id);
    
  }

  function handleDelete(id){
    console.log(id);
    setReviews(value => value.filter(val => id !== val.id))
    fetch(`/reviews/${id}`,{
      method: "DELETE"
    })
  }
  
  
  return (
    // {errors.length > 0 && (
    //   <ul style={{color: "red"}}>
    //     {errors && errors.map((item) => (
    //       <li key={item}>{item}</li>
    //     ))}
    //   </ul>
    // )}


    <div className="primary-container">
     
      {reviews && reviews.map((item)=>(
          <div className="secondary-container">
            <h3>{item.user.fullname}</h3>
            <h4>{item.trip}</h4>
            <h5>{item.airline.name}</h5>
            <p>{item.review}</p>
            <button className="button-26" role="button">
              Edit
            </button>
            <button type="submit" className="button-26" role="button" onClick={()=>{handleDelete(item.id)}}>
              Delete
            </button>
          </div>
))}
<Routes>
<Route path='/components/Airline' element={<Airline handleClick={handleClick}/>}/>
</Routes>
    </div>
  );
}

export default Reviews;
