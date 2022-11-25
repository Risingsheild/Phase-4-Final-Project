import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function GameForm({ onAddGame }) {
  const defaultImage =
    "https://www.pixelstalk.net/wp-content/uploads/2016/05/Gaming-Logo-Wallpapers-Free-Download.jpg";
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(defaultImage);
  const [platform, setPlatform] = useState("");
  const navigate = useNavigate();

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
    const gameItem = {
      title: title,
      genre: genre,
      image_url: image,
      platform_id: platform,
    };

    fetch(`/games/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(gameItem),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddGame(data);
        navigate("/games");
      });
  }

  return (
    <div>
      <NavBar />
      <div className="GameForm">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Add a New Game</h2>
          <label>Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChangeTitle}
            value={title}
          />

          <label>Genre</label>
          <input
            type="text"
            id="genre"
            onChange={handleChangeGenre}
            value={genre}
          />

          <label>Image</label>
          <input
            type="text"
            id="image_url"
            onChange={handleChangeImage}
            value={image}
            placeholder="https://www.pixelstalk.net/wp-content/uploads/2016/05/Gaming-Logo-Wallpapers-Free-Download.jpg"
          />

          <label> Platform </label>
          <select
            id="platform_id"
            onChange={handleChangePlatform}
            value={platform}
          >
            <option value=""> Select </option>
            <option value="pc.id"> PC </option>
            <option value="xbox.id"> Xbox </option>
            <option value="playstation.id"> Playstation </option>
          </select>
          <button type="submit"> Add Game</button>
        </form>
      </div>
    </div>
  );
}

export default GameForm;
