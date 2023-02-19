import {NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./Context/User";
import { useContext } from "react";

function NavBar() {
  const navigate = useNavigate();
  const { user, logout, loggedIn } = useContext(UserContext);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      logout();
      navigate("/");
    });
  }
  if (loggedIn) {
    return (
      <div className="navBar">
        <h2> 🎮Welcome {user.username}🎮</h2>
        <NavLink to="/games">All Games</NavLink>
        <NavLink to="/addgames">Game Form</NavLink>
        <NavLink to="/reviews">My Game Reviews</NavLink>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="navBar">
        <NavLink to="/signup">SignUp Here</NavLink>
        <NavLink to="/login"> Login In Here</NavLink>
      </div>
    );
  }
}

export default NavBar;
