import GameCard from "./GameCard"
import NavBar from "./NavBar"


function PCgames({games}){
    const pcGames = games.filter((game) => game.platform_id === 'pc')

    return(
        <div className="Card">
            <h2> PC GAMES HERE </h2>
            <NavBar/>
            <ul>
                <GameCard games={pcGames} title={pcGames.title}/>
            </ul>

        </div>
    )

}

export default PCgames