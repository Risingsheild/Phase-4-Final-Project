import GameCard from "./GameCard";
import Logout from "./Logout";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function GameList({ games, reviews }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log(user);
      }
    });
  }, []);

  return (
    <div className="gamesList">
      <Logout />
      <NavBar />
      <h2>Hello {user.username}</h2>
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
