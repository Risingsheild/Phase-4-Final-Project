import { useState, useContext} from "react";
import { UserContext } from "./Context/User";

function EditReview({id}) {
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([])

  const {handleUpdate} = useContext(UserContext)

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
      .then((updatedReview) => {
        if (!updatedReview.errors) {
          handleUpdate(updatedReview)
        } else {
          const errorsList = updatedReview.errors.map(e => <li>{e}</li>)
          setErrors(errorsList)
        }
     })
  }

  return (
    <div>
      <h2>Update Comment and Submit</h2>
      <form onSubmit={handleSubmit} className="GameForm">
        <input
          type="text"
          id="comment"
          placeholder={"UpdateReview"}
          value={comment}
          onChange={handleChange}
        />
        <button type="submit">Submit Update</button>
      </form>
      <ul>{errors}</ul>
    </div>
  );
}

export default EditReview;
