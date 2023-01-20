import { useState } from "react";
import NavBar from "./NavBar";

function GameForm({ onAddGame }) {
  const defaultImage =
    "https://www.pixelstalk.net/wp-content/uploads/2016/05/Gaming-Logo-Wallpapers-Free-Download.jpg";
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(defaultImage);
  const [platform, setPlatform] = useState("");
  const [errors, setErrors] = useState([]);


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

    fetch(`/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(gameItem),
    })
      .then((r) => {
        setGenre("")
        setPlatform("")
        setTitle("")
        setImage(defaultImage)
        if (r.ok) {
          r.json().then((data) => onAddGame(data))
        } else {
          r.json().then((e) => setErrors(e.errors))
          console.log(errors); ; 
          }
        })
      }
  

  return (
    <div>
      {errors
        ? errors.map((e) => (
            <h3 key={errors.message}style={{ color: "red", fontWeight: "bold" }}>{e}</h3>
          ))
        : null}
      <NavBar />
      <div className="GameForm">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Add a New Game</h2>
          <label style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChangeTitle}
            value={title}
          />

          <label style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Genre
          </label>
          <input
            type="text"
            id="genre"
            onChange={handleChangeGenre}
            value={genre}
          />

          <label style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
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
            {" "}
            Platform{" "}
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
