import { useState } from "react";

function ReviewForm({ onAddReview, user }) {
  const [comment, setComment] = useState("");
  const [game_id, setGame_id] = useState("");
  const [errors, setErrors] = useState([]);

  let id = user.id;

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function handleChangeGame(e) {
    setGame_id(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const reviewData = {
      comment: comment,
      user_id: id,
      game_id: game_id,
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => {
        setComment("")
        setGame_id("")
        if (r.ok) {
          r.json().then((data) => onAddReview(data))
        } else {
          r.json().then((e) => setErrors(e.error))
        }
      }) 
    }

  return (
    <div>
     {errors
        ? errors.map((e) => (
            <h1 style={{ color: "red", fontWeight: "bold" }}>{e}</h1>
          ))
        : null}
      <h2>Hello {user.username}</h2> 
      <form onSubmit={handleSubmit} className="GameForm">
        <input
          type="text"
          id="comment"
          placeholder="Add Review"
          value={comment}
          onChange={handleChangeComment}
        />
        <input
          type="text"
          id="game_id"
          placeholder="What Game Number"
          value={game_id}
          onChange={handleChangeGame}
        />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
