import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <div>
        <input type='email' placeholder='Your email Id'/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default NewsLetter
