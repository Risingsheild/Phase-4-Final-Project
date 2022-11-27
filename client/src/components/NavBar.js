import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log(user);
      }
    });
  }, []);

  return (
    <div className="navBar">
      <h2>
        Hello User {user.id}, {user.username}
      </h2>
      <NavLink to="/games">All Games</NavLink>
      <NavLink to="/addgames">Game Form</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
    </div>
  );
}

export default NavBar;
