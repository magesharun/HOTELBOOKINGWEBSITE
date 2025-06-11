import React from 'react';
import { assets } from '../assets/assets';

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex gap-1">
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img
            key={index}
            className="w-4 h-4"
            src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
            alt={`star-${index + 1}`}
          />
        ))}
    </div>
  );
};

export default StarRating;
