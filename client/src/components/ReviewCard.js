import { useNavigate } from "react-router-dom";

function ReviewCard({ reviewInfo, onDeleteReview, user }) {
  const navigate = useNavigate();

  return (
    <div className="Card">
      <h2>
        Review for: {reviewInfo.game.id}.) {reviewInfo.game.title}{" "}
      </h2>

      <h4>{reviewInfo.comment}</h4>
      <p>Review left by user: {reviewInfo.user.username}</p>
      {reviewInfo.user.id === user.id ? (
        <div>
          <button onClick={handleDelete}>Delete Comment</button>
          <button onClick={() => navigate(`/reviews/${reviewInfo.id}`)}>
            Update Review
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ReviewCard;
