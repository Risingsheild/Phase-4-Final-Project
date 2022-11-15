import GameCard from "./GameCard";
import NavBar from "./NavBar";

function GameList({games}) {

    return(
        <div className="gamesList">
            <NavBar />
            {games.map((eachGame) => (
                <GameCard 
                key={eachGame.id}
                game={eachGame}
                title={eachGame.title}
                genre={eachGame.genre}
                />
            ))}
        </div>
    )
}

export default GameList