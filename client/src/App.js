import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import "./components/style.css";
import ReviewList from "./components/ReviewList";
import Platforms from "./components/Platforms";
import Logout from "./components/Logout";
import EditReview from "./components/EditReview";

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);

 useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(() => setUser(user));
      }
    });
  }, []);
  
  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then((data) => setGames(data));
  }, []);

 

  // useEffect(() => {
  //   fetch("/reviews")
  //     .then((r) => r.json())
  //     .then((data) => setReviews(data));
  //   console.log(reviews);
  // }, []);

  function onAddGame(newGame) {
    setGames([...games, newGame]);
  }

  function onAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  function handleDelete(id) {
    const updateReviewList = reviews.filter((review) => review.id !== id);
    setReviews(updateReviewList);
  }

  function handleUpdate(currentReview){
    const newReview = reviews.map((review) =>
    review.id === currentReview.id ? currentReview : review)
    setReviews(newReview)
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/logout" exact element={<Logout setUser={setUser} />} />
        <Route path="/" exact element={<Login setUser={setUser} />}/>
        <Route path="/signup" exact element={<SignUp setUser={setUser} />} />
        <Route path="/games" exact element={<GameList games={games} reviews={reviews} />} />
        <Route path="/reviews" exact element={<ReviewList reviews={reviews} onDeleteReview={handleDelete} onAddReview={onAddReview}/>} />
        <Route path="/addgames" exact element={<GameForm onAddGame={onAddGame} />} />
        <Route path="/reviews/:id" exact element={<EditReview reviews={reviews} onUpdateReview={handleUpdate}/>}/>
        <Route path="/platforms" exact element={<Platforms />} />
      </Routes>
    </div>
  );
}

export default App;
