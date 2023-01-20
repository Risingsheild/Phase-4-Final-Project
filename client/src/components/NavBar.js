import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="navBar">
      <NavLink to="/games">All Games</NavLink>
      <NavLink to="/addgames">Game Form</NavLink>
      <NavLink to="/reviews">My Reviews</NavLink>
    </div>
  );
}

export default NavBar;
