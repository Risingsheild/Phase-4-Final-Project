import React from "react";

function GameCard({game}) {
     return (
        <div className="Card">
            <h1 className="gameHeader">{game.title}</h1>
            <img className="image" src={game.image_url} alt={game.title}/>
            <h2>{game.genre}</h2>
        </div>
     )
    
}

export default GameCard