import React from "react";

const ReviewCard = ({ name, occupation, review }) => {
  return (
    <div className="review-card">
      <div className="content">
        <p className="review">{review}</p>
        <h3 className="name">{name}</h3>
        <p className="occupation">{occupation}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
