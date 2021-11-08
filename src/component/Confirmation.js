import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => { 
  return(
    <div>
        <h1>THANK YOU FOR YOUR PURCHASE</h1>
        <h2>Want to continue shopping at McLovin's?</h2>
        <Link to="/product" className="link">
          <li className="navBtn">Click Here</li>
        </Link>
    </div>
  )
}
export default Confirmation;