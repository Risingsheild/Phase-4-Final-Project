import GameCard from "./GameCard"


function PcGames({games}){
    const pcGames = games.filter((game) => game.platform_id === 'pc')

    return(
        <div className="Card">
            <h2> PC GAMES HERE </h2>
            <ul>
                <GameCard games={pcGames} title={pcGames.title}/>
            </ul>

        </div>
    )

}

export default PcGames