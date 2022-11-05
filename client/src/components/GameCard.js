import React from "react";
import ReviewCard from "./ReviewCard"
import {useNavigate} from "react-router"

function GameCard({game}) {
    const navigate = useNavigate()
     return (
        <div className="Card">
            <h1 className="gameHeader">{game.title}</h1>
            <img className="image" src={game.image_url} alt={game.title}/>
            <h2>{game.genre}</h2>
            <h3> <ReviewCard/> </h3>
            <button onClick={() => navigate(`/reviews`)}>Click here to leave a Review</button>
        </div>
     )
    
}

export default GameCard