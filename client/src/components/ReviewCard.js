import { useNavigate } from "react-router-dom";

function ReviewCard({ reviewInfo, onDeleteReview }) {
  
  const navigate = useNavigate()
  
  function handleDelete() {
    fetch(`/reviews/${reviewInfo.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      onDeleteReview(reviewInfo.id)
      navigate("/games");
  })
}

  return (
    <div className="Card">
      <h2>Game Title:<p>{reviewInfo.game.title}</p></h2>
      
      <p>{reviewInfo.comment}</p>

      <button type="submit" onClick={handleDelete}>
        Delete Comment
      </button>
    </div>
  );
}

export default ReviewCard;
