function ReviewCard({ reviewInfo }) {
  function handleDelete(r) {
    fetch(`/reviews/${r.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    })
  }

  return (
    <div className="GameCard">
      <p>{reviewInfo.game.map(ele => ele.title)}</p>
      <p>{reviewInfo.comment}</p>

      <button type="submit" onClick={handleDelete}>
        Delete Comment
      </button>
    </div>
  );
}

export default ReviewCard;
