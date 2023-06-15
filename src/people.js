import React from "react";
import ReviewCard from "./ReviewCard";
import "./people.css";

const People = () => {
  const reviews = [
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Jamie Vardy",
      occupation: "Parent"
    },
    {
      name: "Kylie Quinn",
      occupation: "Parent",
      review: "Pellentesque accumsan arcu non purus congue egestas."
    },
    {
      name: "Ana Markovic",
      occupation: "Parent",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "C. Ronaldo",
      occupation: "Parent",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Evan Rakatic",
      occupation: "Parent",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Robin Van",
      occupation: "Parent",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div>
      <div className="heading">
        <h1>
          What <span>People</span> say <span>About</span> us
        </h1>
      </div>
      <div className="review-card">
        {reviews.map((review, index) => (
          <div key={index} className="review-card-item">
            <ReviewCard
              review={review.review}
              name={review.name}
              occupation={review.occupation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
