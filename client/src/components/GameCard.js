import React from "react";
import { useNavigate } from "react-router";

function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <div className="Card" sx={{ maxWidth: 345, border :1 }}>
      <h1 className="gameHeader">
        {game.title} <br></br> Genre: {game.genre}{" "}
      </h1>
      <img className="image" src={game.image_url} alt={game.title} />
      <p>{game.reviews.map((element) => element.comment)}</p>
      <button onClick={() => navigate(`/reviews`)}>
        Click here to leave a Review
      </button>
    </div>
  );
}

export default GameCard;
