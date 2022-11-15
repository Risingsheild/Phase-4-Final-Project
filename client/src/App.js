import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/Signup"
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import PCgames from "./components/PCgames";
import "./components/style.css"
import ReviewList from "./components/ReviewList";



function App() {
    const [user, setUser] = useState('')
    const [games, setGames] = useState([])
    const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user))
         console.log(user);
      }
    })
  },[]);


useEffect(() => {
  fetch('/games')
  .then((r) => r.json())
  .then(data => setGames(data))
},[])

useEffect(() => {
  fetch('/reviews')
  .then((r) => r.json())
  .then(data => setReviews(data))
  console.log(reviews);
},[])

function onAddGame(newGame){
  setGames([...games, newGame])
}

  return (
    <div className="App">
      <h1>Please leave a Review</h1>
      <Routes>
        <Route path='/' exact element={<Login setUser={setUser}/>}> </Route>
        <Route path='/signup' exact element={<SignUp setUser={setUser}/>}/>
        <Route path='/games' exact element={<GameList games={games}/>}/>
        <Route path='/reviews' exact element={<ReviewList/>}/>
        <Route path='/addgames' exact element={<GameForm onAddGame={onAddGame}/>}/>
        <Route path='/pc/games' exact element={<PCgames games={games}/>}/>
      </Routes>
    </div>
  );
}

export default App;
