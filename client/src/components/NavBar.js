import { NavLink } from "react-router-dom";
import { UserContext } from "./Context/User";
import Login from "./Login";

function NavBar() {
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
    <Login />;
  }
}

export default NavBar;
