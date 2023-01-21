import GameCard from "./GameCard";
import { useContext } from "react";
import { UserContext } from "./Context/User";

function GameList() {
  const { games } = useContext(UserContext);

  return (
    <div className="gamesList">
      {games.map((eachGame) => (
        <GameCard
          key={eachGame.id}
          game={eachGame}
          title={eachGame.title}
          genre={eachGame.genre}
        />
      ))}
    </div>
  );
}

export default GameList;
