import { useState } from "react";

function GameForm({onAddGame}){
        const defaultImage = "https://image.freepik.com/free-vector/online-videogame-neon-icon_1262-15918.jpg"
        const [title, setTitle] = useState("")
        const [genre, setGenre] = useState("")
        const [image, setImage] = useState(defaultImage)
        const [platform, setPlatform] = useState("")

        
    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }
    function handleChangeGenre(e) {
        setGenre(e.target.value)
    }

    function handleChangeImage(e){
        setImage(e.target.value)
    } 
    
    function handleChangePlatform(e){
        setPlatform(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const gameItem ={
            title: title,
            genre: genre,
            image: image,
            platform: platform
        }
        
        fetch('/games', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(gameItem) 
        })
        .then((r) => r.json())
        .then((data) => {
            onAddGame(data)
            setTitle("")
            setGenre("")
            setImage(defaultImage)
            setPlatform("")
        })
        
    }

    return(
        <div className="GameForm">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Add a New Game</h2>
                <label>Title</label>
                    <input
                        type="text"
                        id="title"
                        onChange={handleChangeTitle}
                        value={title} />
                    
                <label>Genre</label>
                    <input
                        type="text"
                        id="genre"
                        onChange={handleChangeGenre}
                        value={genre} />

                <label>Image</label> 
                    <input
                        type="text"
                        id="image_url"
                        onChange={handleChangeImage}
                        value="image_url"
                    />
                
                <label> Platform </label>
                    <select id='platform' onChange={handleChangePlatform} value={platform}>
                            <option value=''> Select </option>
                            <option value='pc'> PC  </option>
                            <option value='xbox'> Xbox </option>
                            <option value='playstation'> Playstation </option> 
                    </select>
            </form>

        </div>
    )

}

export default GameForm


