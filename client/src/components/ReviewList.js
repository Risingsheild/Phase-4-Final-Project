import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import NavBar from "./NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList() {
  const [reviewData, setReviewData] = useState([]);
  console.log(reviewData);

  function handleDelete(id) {
    const newReviewList = reviewData.filter((review) => review.id !== id);
    setReviewData(newReviewList);
  }

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => setReviewData(data));
  }, []);

  return (
    <div className="PlatformList">
      <Logout />
      <NavBar />
      <br></br>
      <ReviewForm />
      <br></br>

      {reviewData.map((eachReview) => {
        return (
          <ReviewCard
            key={eachReview.id}
            reviewInfo={eachReview}
            onDeleteReview={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
