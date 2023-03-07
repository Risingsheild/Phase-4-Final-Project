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
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="Card">
        <br></br>
        <h1>Game: {review.game.title}</h1>
        <img className="img" src={review.game.image_url} alt={review.game.title}/>
        <h2>Comment: {review.comment} </h2>
        <br></br>
        <button onClick={handleFlipped}> Update This Review </button>
        <br></br> <button onClick={deleteClick}>Delete</button>
      </div>
      <div className="Card">
      <img className= "img" src={review.game.image_url} alt={review.game.title}/>
        <EditReview review={review} />
        <br></br>
        <button onClick={handleFlipped}>Click When Finished Updating</button>
      </div>
     
    </ReactCardFlip>
  );
}

export default ReviewCard;
