import React from "react";
import "./CSS/Reviews.css";
import { useState, useEffect } from "react";
import Airline from "./Airline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Reviews({handleEdit}) {
  const [patch, setPatch] = useState({review : ""})
  const [edit, setEdit] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    
    fetch("/reviews")
      .then((res) => res.json())
      .then((res) => setReviews(res));
}, []);

  console.log(reviews);

  function handleClick(e) {
    console.log(e.target.id);
  }

  function handleDelete(id) {
    console.log(id);
    setReviews((value) => value.filter((val) => id !== val.id));
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
  }
  const [editId,setEditId] = useState()

  function handleUpdate(e) {
    e.preventDefault()
    console.log(editId)
    fetch(`/reviews/${editId}`,{
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      }, body: JSON.stringify(patch)
    }).then(res => res.json())
  
  
    
  }

  function spread(data) {
    setReviews([...reviews, data])
   
  }
   
  

  // function handlePatch(e) {
  //   setPatch({[e.target.name]: e.target.value})
  //   console.log(patch)
  // } 

  return (
    

    <div className="primary-container">
      {reviews &&
        reviews.map((item) => (
          <div className="secondary-container">
            {/* <form class="form">
        <input placeholder="edit" class="input"/>
        <button class="button-10">Button 10</button>
        </form> */}
            <h3>{item.user.fullname}</h3>
            <h4>{item.trip}</h4>
            <h5>{item.airline.name}</h5>
            <p>{item.review}</p>
            <button className="button-26" id={item.id}  onClick={(e)=>{ 
            
              setEditId(e.target.id)
              setEdit(!edit)}}>
              Edit
            </button>
            <button
              type="submit"
              className="button-26"
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        {edit && (
      <form class="form1">
        <input placeholder="edit" name="review" class="input1" onChange={(e)=> setPatch({...patch, review:e.target.value})} value={patch.review}/>
        <button id="button-11"onClick={handleUpdate}>Submit</button>
      </form>
      )}
    </div>
  );
}
// {errors.length > 0 && (
    //   <ul style={{color: "red"}}>
    //     {errors && errors.map((item) => (
    //       <li key={item}>{item}</li>
    //     ))}
    //   </ul>
    // )}

export default Reviews;
