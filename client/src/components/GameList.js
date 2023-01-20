import GameCard from "./GameCard";
import Logout from "./Logout";
import NavBar from "./NavBar";

function GameList({ games, reviews}) {
  return (
    <div className="gamesList">
      <Logout />
      <NavBar />
      {games.map((eachGame) => (
        <GameCard
          key={eachGame.id}
          game={eachGame}
          title={eachGame.title}
          genre={eachGame.genre}
          reviews={reviews}
        />
      ))}
    </div>
  );
}

export default GameList;
