import React from "react";
import "./CSS/Reviews.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Airline from "./Airline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Reviews({ user }) {
  const [patch, setPatch] = useState({ review: "" });
  const [editId, setEditId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [airline, setAirline] = useState({});
  const location = useLocation();
  const { airline_id } = location.state || {};
   const [form, setForm ] = useState({
    trip:"",
    review:"",
    airline_id:airline_id,
    user_id:user.id

  })

  function handleUpdate(e) {
    e.preventDefault();
    fetch(`/reviews/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(patch),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(user);

        setAirline(data);
        if (data.reviews !== undefined) {
          setReviews(data.reviews);
          e.target.parentElement.classList.add("show_form")
        } else {
          setReviews([]);
        }
      });
  }



  function handleDelete(id) {
    console.log(id);
    setReviews((value) => value.filter((val) => id !== val.id));
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
  }

  // function getUpdates() {
  //   fetch(`/airlines/${airline_id}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     console.log(user)

  //     setAirline(data)
  //     if (data.reviews !== undefined) {

  //       setReviews(data.reviews)
  //     }
  //     else {
  //       setReviews([])
  //     }
  //   });
  // }

  useEffect(() => {
    fetch(`/airlines/${airline_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(user);

        setAirline(data);
        if (data.reviews !== undefined) {
          setReviews(data.reviews);
        } else {
          setReviews([]);
        }
      });
  }, []);

  function handleSubmit(e) {
  e.preventDefault()
  fetch("/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form ),
  }).then((r) => {
    
    
    if (r.ok) {
      
      r.json().then((form) => setReviews([...reviews, form]));
      
      
    } else {
      r.json().then((err) => alert(err.error));
      
      
    }
  });
  
}
const handleVisibility = (e) => {
  console.log(e.target.parentElement.childNodes[6].classList.remove('show_form'));
}

  return (
   
    <div className="Container">

      <div className="reviews_container">
        
        {reviews.map((review) => (
        
          <div className="primary-container">
            {user.fullname === review.user.fullname ? (
              <>
                <div className="secondary-container" key={review.id}>
                  <h3>{`${review.user.fullname}(you)`}</h3>
                  
                  <h4>{review.trip}</h4>
                  <h5>{airline.name}</h5>
                  <p>{review.review}</p>
                  <button
                    className="button-26"
                    id={review.id}
                    onClick={(e) => {
                      setEditId(e.target.id);
                      // setEdit(!edit);
                      handleVisibility(e)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="button-26"
                    onClick={() => {
                      handleDelete(review.id);
                    }}
                  >
                    Delete
                  </button>
                  <form  id={`form${review.id}`} className="form1 show_form">
                    <input
                      placeholder="edit"
                      name="review"
                      className="input1"
                      onChange={(e) =>
                        setPatch({ ...patch, review: e.target.value })
                      }
                      value={patch.review}
                    />
                    <button id="button-11" onClick={handleUpdate}>
                      Submit
                    </button>
                  </form>
                </div>
                {/* {edit && (
                  <form className="form1">
                    <input
                      placeholder="edit"
                      name="review"
                      className="input1"
                      onChange={(e) =>
                        setPatch({ ...patch, review: e.target.value })
                      }
                      value={patch.review}
                    />
                    <button id="button-11" onClick={handleUpdate}>
                      Submit
                    </button>
                  </form>
                )} */}
              </>
            ) : (
              <>
                <div className="secondary-container">
                  <h3>{review.user.fullname}</h3>
                  <h4>{review.trip}</h4>
                  <h5>{airline.name}</h5>
                  <p>{review.review}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="myDiv">
        <form>
          <h1>Got Feedback?</h1>
          <label for="trip">your trip:</label>
          <input type="text" placeholder="Enter your trip.." onChange={e => setForm({...form, trip:e.target.value})}></input>

          <label for="comment">comment:</label>
          <textarea placeholder="Leave a comment here..." onChange={e => setForm({...form, review:e.target.value})}></textarea>

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
