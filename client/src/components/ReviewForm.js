import { useState, useContext } from "react";
import { UserContext } from "./Context/User";


function ReviewForm() {
//  const {myGames} = useContext(UserContext)
 const {addReview} = useContext(UserContext)
 const [comment, setComment] = useState("")
 const [game_id, setGame_id] = useState("")

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
      game_id: game_id,
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then(review =>  addReview(review))
      }

    // const renderMyGames = myGames.map(g => <li key={g.id}>{g.title}</li>)

  return (
    <div>
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
        {/* <h4>{renderMyGames}</h4> */}
      </form>
    </div>
  );
}

export default ReviewForm;
