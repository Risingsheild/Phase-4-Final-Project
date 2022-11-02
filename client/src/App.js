import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/Signup"
import NavBar from "./components/NavBar"
import "./components/style.css"


function App() {
    const [user, setUser] = useState('')

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



  return (
    <div className="App">
      <h1>Hello World!</h1>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Login setUser={setUser}/>}> </Route>
        <Route path='/signup' exact element={<SignUp setUser={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
