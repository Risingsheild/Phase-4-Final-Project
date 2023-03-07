import React, { useState, useEffect } from "react";
//import {useParams} from 'react-router-dom'
const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [games, setGames] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [myGames, setMyGames] = useState([]);

  //const {id} = useParams()

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        if (data.errors) {
          setLoggedIn(false);
          setReviews([]);
          setGames([]);
          setMyGames([]);
        } else {
          setLoggedIn(true);
          setMyGames(data.unique_games);
          setReviews(data.reviews);
          fetchGames();
        }
      });
  }, []);

  function fetchGames() {
    fetch("/games")
      .then((r) => r.json())
      .then((data) => setGames(data));
  }

  function onAddGames(newGame) {
    setGames([...games, newGame]);
  }
  function addReview(newReview) {
    //console.log("new Review", newReview.game.id);
    const g = games.find((ug) => ug.id === newReview.game.id);
    //console.log(g);
    const newG = { ...g, reviews: [...g.reviews, newReview] };
    //console.log('New G', newG);
    const newGameList = games.map((game) => (game.id === g.id ? newG : game));
    //console.log('new games', newGameList);
    setReviews([...reviews, newReview]);
    setGames(newGameList);
  }

  function login(user) {
    setUser(user);
    setLoggedIn(true);
    fetchGames();
    setReviews(user.reviews);
    setMyGames(user.unique_games);
  }

  function logout() {
    setUser({});
    setLoggedIn(false);
  }

  function signup(user) {
    setUser(user);
    setLoggedIn(true);
    fetchGames();
    setMyGames([]);
    setReviews([]);
  }

  function handleUpdate(currentReview) {
    const g = games.find((ug) => ug.id === currentReview.game.id);

    const UpdateMyReview = reviews.map((review) =>
      review.id === currentReview.id ? currentReview : review
    );

    const UpdateGameReview = g.reviews.map((review) =>
      review.id === currentReview.id ? currentReview : review
    );
    const newG = { ...g, reviews: UpdateGameReview };
    const newGameList = games.map((game) => (game.id === g.id ? newG : game));
    setReviews(UpdateMyReview);
    setGames(newGameList);
  }

  function onDeleteReview(id) {
    const updateReviewList = reviews.filter((review) => review.id !== id);
    setReviews(updateReviewList);
    fetchGames();
  }

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    onDeleteReview(id);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        games,
        reviews,
        loggedIn,
        myGames,
        login,
        logout,
        signup,
        onAddGames,
        addReview,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
