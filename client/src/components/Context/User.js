import React, {useState, useEffect} from "react";

const UserContext = React.createContext();

function UserProvider({ childern }) {
  const [user, setUser] = useState({});
  const [games, setGames] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        if (data.error) {
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

  function addGames(game) {
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((data) => {
        setGames([...games, data]);
      });
  }

  function addReview(newReview) {
    setReviews([...reviews, newReview]);
    setGames([...games, reviews.game]);
  }

  function handleUpdate(currentReview) {
    const UpdateReview = reviews.map((review) =>
      review.id === currentReview.id ? currentReview : review
    );
    setReviews(UpdateReview);
  }

  function onDeleteReview(id) {
    const updateReviewList = reviews.filter((review) => review.id !== id);
    setReviews(updateReviewList);
  }

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    onDeleteReview(id);
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
  return(
    <UserContext.Provider value={{user, games, reviews, loggedIn, myGames, login, logout, signup, addGames, addReview, handleUpdate, handleDelete}}>
        {childern}
    </UserContext.Provider>
  )

}

export {UserContext, UserProvider}
