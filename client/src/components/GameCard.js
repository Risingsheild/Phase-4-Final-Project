import {useState} from "react";
import ReactCardFlip from "react-card-flip";

import ReviewForm from "./ReviewForm";

function GameCard({ game }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const gameReviews = game.reviews.map((element) => (
    <li key={element.id} style={{ fontWeight: "bold" }}>
      {element.comment}
    </li>
  ));

  function handleFlipped() {
    setIsFlipped(!isFlipped);
  }






  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
    <div className="Card">
      <h1 className="gameHeader">
         {game.title} on {game.platform.title} <br></br> Genre:{" "}
        {game.genre}
      </h1>
      <img className="image" src={game.image_url} alt={game.title} />

      {gameReviews}

      <br></br>
      <button onClick={handleFlipped}>   Click here to leave a Review
      </button>
      </div>
      <div className="Card">
      <img className="image" src={game.image_url} alt={game.title} />
      <ReviewForm id={game.id} />
      <br></br>
      <button onClick={handleFlipped}> Flip to front side</button>
    </div>
  </ReactCardFlip>
  );
}

export default GameCard;
