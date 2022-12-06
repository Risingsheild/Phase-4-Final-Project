import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReviewCard({ reviewInfo, onDeleteReview }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log(user);
      }
    });
  }, []);

  function handleDelete() {
    fetch(`/reviews/${reviewInfo.id}`, {
      method: "DELETE",
    }).then(() => onDeleteReview(reviewInfo.id));
  }
 
  return (
    <div className="Card">
      
      <h2>
        Review for: {reviewInfo.game.id}.) {reviewInfo.game.title}{" "}
      </h2>

      <h4>{reviewInfo.comment}</h4>
      <p>
        Review left by user: {reviewInfo.user.username}
      </p>
{reviewInfo.user.id === user.id ?
<div>
      <button onClick={handleDelete}>Delete Comment</button>
      <button onClick={() => navigate(`/reviews/${reviewInfo.id}`)}>
        Update Review
      </button> 
</div>
      : null }
    </div>
  );
}

export default ReviewCard;
