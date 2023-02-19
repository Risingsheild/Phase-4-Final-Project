import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/User";
import GameCard from "./GameCard";

function Game() {
  const { id } = useParams();

  const {singleGame} = useContext(UserContext)

  return (
    <div className="Card">
      
      <ReviewForm id={id} />
    </div>
  );
}

export default Game;
