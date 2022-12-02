import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function EditReview({ onUpdateReview }) {
  const [comment, setComment] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/reviews/${id}`)
      .then((r) => r.json())
      .then((data) => setComment(data.comment));
  }, []);

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const reviewData = { comment: comment };

    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then((data) => {
        onUpdateReview(data);
        navigate("/reviews");
      });
  }

  return (
    <div>
      <h2>Update Comment and Submit</h2>
      <form onSubmit={handleSubmit} className="GameForm">
        <input
          type="text"
          id="comment"
          placeholder="UpdateReview"
          value={comment}
          onChange={handleChange}
        />
        <button type="submit">Submit Update</button>
      </form>
    </div>
  );
}

export default EditReview;
