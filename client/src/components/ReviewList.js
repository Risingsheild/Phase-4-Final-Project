import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import NavBar from "./NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList({reviews, onDeleteReview}) {
  return (
    <div className="PlatformList">
      <Logout />
      <NavBar />
      <br></br>
      <ReviewForm />
      <br></br>

      {reviews.map((eachReview) => {
        return (
          <ReviewCard
            key={eachReview.id}
            reviewInfo={eachReview}
            onDeleteReview={onDeleteReview}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
