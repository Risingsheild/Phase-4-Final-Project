import { useState, useEffect } from "react";
import Logout from "./Logout";
import NavBar from "./NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList({ reviews, onDeleteReview, onAddReview }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="PlatformList">
      <Logout />
      <NavBar />
      <br></br>
      <ReviewForm onAddReview={onAddReview} user={user} />
      <br></br>

      {reviews.map((eachReview) => {
        return (
          <ReviewCard
            user={user}
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
