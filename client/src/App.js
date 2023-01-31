import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import ReviewList from "./components/ReviewList";
import Platforms from "./components/Platforms";
import EditReview from "./components/EditReview";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import "./components/style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/addgames" element={<GameForm />} />
        <Route path="/reviews/:id" element={<EditReview />} />
        <Route path="/platforms" element={<Platforms />} />
      </Routes>
    </div>
  );
}

export default App;
