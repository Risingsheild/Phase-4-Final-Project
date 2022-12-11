import React from "react";
import { useNavigate } from "react-router";

function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <div className="Card">
      <h1 className="gameHeader">
        {game.id}: {game.title} on {game.platform.title} <br></br> Genre:{" "}
        {game.genre}
      </h1>
      <img className="image" src={game.image_url} alt={game.title} />
      <li className="Container" style={{ fontWeight: "bold" }}>
        {game.reviews.map((element) => element.comment)}
      </li>
      <br></br>
      <button onClick={() => navigate(`/reviews`)}>
        Click here to leave a Review
      </button>
    </div>
  );
}

export default GameCard;
