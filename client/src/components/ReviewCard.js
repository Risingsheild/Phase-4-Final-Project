import { useNavigate } from "react-router-dom";

function ReviewCard({ reviewInfo, onDeleteReview }) {
  const navigate = useNavigate()
 
  function handleDelete(r) {
    fetch(`/reviews/${r.id}`, {
      method: "DELETE",
      headers: {
        "Content-type" : "Application/json",
      },
     })
      .then((r) => r.json())
      .then(() => onDeleteReview(reviewInfo.id))  
  }

  return (
    <div className="Card">
      <h2>
        Review for: {reviewInfo.game.id}.) {reviewInfo.game.title}{" "}
      </h2>

      <h4>{reviewInfo.comment}</h4>
      <p>
        Review left by user: {reviewInfo.user.id}.) {reviewInfo.user.username}
      </p>

      <button onClick={handleDelete}>
        Delete Comment
      </button>
      <button onClick={() => navigate(`/reviews/${reviewInfo.id}`)}> Update Review </button>
    </div>
  );
}

export default ReviewCard;
