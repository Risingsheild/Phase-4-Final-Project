import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/Signup"
import ReviewForm from "./components/ReviewForm"
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import "./components/style.css"



function App() {
    const [user, setUser] = useState('')
    const [games, setGames] = useState([])

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
        <Route path='/reviews' exact element={<ReviewForm/>}/>
        <Route path='/addgames' exact element={<GameForm onAddGame={onAddGame}/>}/>
      </Routes>
    </div>
  );
}

export default App;
