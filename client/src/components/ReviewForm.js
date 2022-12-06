import { useState, useEffect } from "react";

function ReviewForm({ onAddReview }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("")
  const [game_id, setGame_id] = useState("")

  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log(user);
      }
    });
  }, []);

  let id = user.id

  function handleChangeComment(e) {
    setComment(e.target.value)
  }

  function handleChangeGame(e){
    setGame_id(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const reviewData = {
      comment: comment,
      user_id: id,
      game_id: game_id
    }
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddReview(data);
        
      });
  }

  return (
    <div>
    <h2>
    Hello {user.username}
  </h2>
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
