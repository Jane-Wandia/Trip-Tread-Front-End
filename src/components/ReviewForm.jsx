import React from "react";
import "./CSS/ReviewForm.css";

function ReviewForm() {
  return (
    <div className="myDiv">
    <form>
      <h1>got feedback?</h1>
      <div className="id">
       <input type="text" placeholder="your trip"></input>
       
      </div>

      <div className="id">
       <input type="text" placeholder="comments"></input>
       <textarea placeholder="Leave a comment here..."></textarea>
       <button>Submit</button>
      </div>
    </form>
    </div>
  );
}

export default ReviewForm;
