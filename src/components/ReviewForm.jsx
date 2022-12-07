import React from "react";
import "./CSS/ReviewForm.css";

function ReviewForm() {
  return (
    <div className="myDiv">
    <form>
      <h1>Got Feedback?</h1>
        <label for="trip">your trip:</label>
       <input type="text" placeholder="Enter your trip.."></input>

       <label for="comment">comment:</label>
       <textarea placeholder="Leave a comment here..."></textarea>

       <label for="comment">Rate:</label>
       <input type="range" min="1" max="5" name="rating" id="rating" />

       <button>Submit</button>
    </form>
    </div>
  );
}

export default ReviewForm;
