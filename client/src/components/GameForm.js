
import { useState, useContext } from "react";
import { UserContext } from "./Context/User";

function GameForm() {
  const {addGames} = useContext(UserContext)

  const defaultImage =
    "https://www.pixelstalk.net/wp-content/uploads/2016/05/Gaming-Logo-Wallpapers-Free-Download.jpg";
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(defaultImage);
  const [platform, setPlatform] = useState("");
  

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeGenre(e) {
    setGenre(e.target.value);
  }

  function handleChangeImage(e) {
    setImage(e.target.value);
  }

  function handleChangePlatform(e) {
    setPlatform(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addGames({
      title: title,
      genre: genre,
      image_url: image,
      platform_id: platform,
    });
  }

  return (
    <div>
      <div className="GameForm">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Add a New Game</h2>
          <label style={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Game Title"
            onChange={handleChangeTitle}
            value={title}
          />

          <label style={{ fontSize: "2rem", fontWeight: "bold", color: "purple" }}>
            Genre
          </label>
          <input
            type="text"
            id="genre"
            placeholder="Game Genre"
            onChange={handleChangeGenre}
            value={genre}
          />

          <label style={{ fontSize: "2rem", fontWeight: "bold", color: "Gold" }}>
            Image
          </label>
          <input
            type="text"
            id="image_url"
            onChange={handleChangeImage}
            value={image}
            placeholder="https://www.pixelstalk.net/wp-content/uploads/2016/05/Gaming-Logo-Wallpapers-Free-Download.jpg"
          />

          <label style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Platform
          </label>
          <select
            id="platform_id"
            onChange={handleChangePlatform}
            value={platform}
          >
            <option value=""> Select </option>
            <option value="1"> PC </option>
            <option value="2"> Xbox </option>
            <option value="3"> Playstation </option>
          </select>
          <button type="submit"> Add Game</button>
        </form>
      </div>
    </div>
  );
}

export default GameForm;
