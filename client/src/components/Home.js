import { UserContext } from "./Context/User";
import { useContext } from "react";

function Home() {
  const { user } = useContext(UserContext);

  if (!user || user.errors ||!user.username) {
    return <h1 style = {{color: "red", background: "white"}}> Please Navigate to the Login or Sign up Page </h1>;
  } else {
    return (
      <div>
        <p> I hope you enjoy the games we have in our collection </p>
        <p>
          Please leave a review for any game you have played in the past or add
          a new game that isn't on the list
        </p>
        <h4> Thank you and please come again </h4>
      </div>
    );
  }
}
export default Home;
