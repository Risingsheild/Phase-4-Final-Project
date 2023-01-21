import React from "react";
import { useNavigate } from "react-router";

function GameCard({ game }) {
  const navigate = useNavigate();

  const gameReview = game.reviews.map((element) => (
    <li key={element.id} style={{ fontWeight: "bold" }}>
      {element.comment}
    </li>
  ));

  return (
    <div className="Card">
      <h1 className="gameHeader">
        {game.id}: {game.title} on {game.platform.title} <br></br> Genre:{" "}
        {game.genre}
      </h1>
      <img className="image" src={game.image_url} alt={game.title} />

      {gameReview}

      <br></br>
      <button onClick={() => navigate(`/reviews`)}>
        Click here to leave a Review
      </button>
    </div>
  );
}

export default GameCard;
