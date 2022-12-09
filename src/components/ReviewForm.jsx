import React, {useState} from "react";
import "./CSS/ReviewForm.css";
import Reviews from './Reviews'

function ReviewForm() {
  const [form, setForm ] = useState({
    trip:"",
    review:""

  })
  

  const [reviews, setReviews] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form }),
    }).then((r) => {
      
      
      if (r.ok) {
        
        r.json().then((reviews) => setReviews(reviews));
        
        
      } else {
        r.json().then((err) => alert(err.error));
        
        
      }
    });
    
  }
  // const navigate = useNavigate()
  return (
    <div className="myDiv">
    <form>
      <h1>Got Feedback?</h1>
        <label for="trip">your trip:</label>
       <input type="text" placeholder="Enter your trip.." onChange={e => setForm(e.target.value)}></input>

       <label for="comment">comment:</label>
       <textarea placeholder="Leave a comment here..." onChange={e => setForm(e.target.value)}></textarea>

       <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  );
}

export default ReviewForm;
