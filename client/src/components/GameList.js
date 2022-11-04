import { useEffect, useState } from "react";
import GameCard from "./GameCard";

function GameList() {
    const [games, setGames] = useState([])
        console.log(games);

    useEffect(() => {
        fetch('/games')
        .then(r => r.json())
        .then(data => setGames(data))
    },[])

    return(
        <div className="gamesList">
            {games.map((eachGame) => (
                <GameCard 
                key={eachGame.id}
                game={eachGame}
                title={eachGame.title}
                />
            ))}
        </div>
    )
}

export default GameList