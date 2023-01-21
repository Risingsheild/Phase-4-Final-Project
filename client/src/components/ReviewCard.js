import { useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import EditReview from "./EditReview";
import { UserContext } from "./Context/User";

function ReviewCard({ review }) {
  const { handleDelete } = useContext(UserContext);
  const { id } = review;
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlipped() {
    setIsFlipped(!isFlipped);
  }

  function deleteClick() {
    handleDelete(id);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <button onClick={deleteClick}>Delete</button>
        <h3>Comment: {review.comment} </h3>
        <br></br>
        <h4>Game: {review.game.title}</h4>
        <h5>{review.game.image_url}</h5>
        <button onClick={handleFlipped}> Update This Review </button>
      </div>
        <EditReview id={id} review={review} />
        <br></br>
        <button onClick={handleFlipped}>Click When Finished Updating</button>
    </ReactCardFlip>
  );
}

export default ReviewCard;
