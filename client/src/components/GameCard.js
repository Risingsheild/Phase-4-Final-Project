import React from "react";
import { useNavigate } from "react-router";

function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <div className="Card">
      <h1 className="gameHeader">
        {game.id}: {game.title} <br></br> Genre: {game.genre}
      </h1>
      <img className="image" src={game.image_url} alt={game.title} />
      <li className="Container">
        {game.reviews.map((element) => element.comment)}
      </li>
      <button onClick={() => navigate(`/reviews`)}>
        Click here to leave a Review
      </button>
    </div>
  );
}

export default GameCard;
