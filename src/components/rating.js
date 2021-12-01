import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({rating}) => {
  const totalRating = [];

  for (let index = 0; index < 5; index++) {
    if(index < rating){
      totalRating.push(
        <li className="star" key={index}><FaStar/></li>
      )
    }
    else{
      totalRating.push(
        <li className="star-o" key={index}><FaStar/></li>
      )
    }
    
  }
  
  return (
    <div className="rating">
      <ul>
        {totalRating}
      </ul>

    </div>
  );
};

export default Rating;
