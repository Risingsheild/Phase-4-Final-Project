import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./Context/User";
import { useContext } from "react";


function NavBar() {
  const navigate = useNavigate()
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
        <hi> Hello {user.username}</hi>
        <NavLink to="/games">All Games</NavLink>
        <NavLink to="/addgames">Game Form</NavLink>
        <NavLink to="/reviews">My Reviews</NavLink>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/signup'>SignUp Here</Link>
        <Link to='/'> Login In Here</Link>
      </div>
    )
  }
}

export default NavBar;
