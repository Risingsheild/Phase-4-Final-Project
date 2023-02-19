import { useState, useContext } from "react";
import { UserContext } from "./Context/User";

function ReviewForm({id}) {
  const { addReview } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState(null)

  function handleChangeComment(e) {
    setComment(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    const reviewData = {
      comment: comment,
      game_id: id 
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then((review) => {
        if (!review.errors) {
          addReview(review);
        } else {
          const errorsList = review.errors.map((e) => <li>{e}</li>);
          setErrors(errorsList);
        }
  })
}
  return (
    <div>
    <ul style={{ fontSize: "1.5rem", fontWeight: "bold", color: "red", background: "white"}}>{errors}</ul>
      <form onSubmit={handleSubmit} className="GameForm">
        <input
          type="text"
          id="comment"
          placeholder="Add Review"
          value={comment}
          onChange={handleChangeComment}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
