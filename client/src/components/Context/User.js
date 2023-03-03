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



  function onAddGames(newGame){
    setGames([...games, newGame])
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

  function addReview(newReview) {
     console.log("new Review", newReview);
     setReviews([...reviews, newReview]);
     fetchGames()
   
}

  function handleUpdate(currentReview) {
    const UpdateReview = reviews.map((review) =>
      review.id === currentReview.id ? currentReview : review
    );
    setReviews(UpdateReview)
    fetchGames()
  }

  function onDeleteReview(id) {
    const updateReviewList = reviews.filter((review) => review.id !== id);
    setReviews(updateReviewList);
    fetchGames()
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
