import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import ReviewList from "./components/ReviewList";
import Platforms from "./components/Platforms";
import EditReview from "./components/EditReview";
import NavBar from "./components/NavBar";

import './components/style.css'

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/games" exact element={<GameList />} />
        <Route path="/reviews" exact element={<ReviewList />} />
        <Route path="/addgames" exact element={<GameForm />} />
        <Route path="/reviews/:id" exact element={<EditReview />} />
        <Route path="/platforms" exact element={<Platforms />} />
      </Routes>
    </div>
  );
}

export default App;
