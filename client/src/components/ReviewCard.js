
function ReviewCard({ reviewInfo, onDeleteReview }) {
  
  
  function handleDelete() {
    fetch(`/reviews/${reviewInfo.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      onDeleteReview(reviewInfo.id)
      window.location.reload()
  })
}

  return (
    <div className="Card">
      <h2>Review for: {reviewInfo.game.id}.) {reviewInfo.game.title} </h2>
      
      <h4>{reviewInfo.comment}</h4>
      <p>Review left by user: {reviewInfo.user.id}.) {reviewInfo.user.username}</p> 

      <button type="submit" onClick={handleDelete}>
        Delete Comment
      </button>
    </div>
  );
}

export default ReviewCard;
