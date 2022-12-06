import React from 'react'
import "./CSS/ReviewForm.css";

function ReviewForm() {
  return (
    <div className='myDiv'>
        <h1>got feedback?</h1>
        <i className='fa fa-comments-o fa-5x'></i>
        <br></br>
        <div className='form-group'>
            <label for="trip">trip:</label>
            <input className='form-control' rows='1' id='username' type='text' placeholder='Your trip?'></input>
            <br></br>
            <label for="comment:"></label>
        </div>
        
        </div>
  )
}

export default ReviewForm