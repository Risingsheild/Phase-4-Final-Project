import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Button, Container, FormControl, Grid, TextField, Typography} from "@mui/material";
import { UserContext } from "./Context/User";

function Login() {
  const {login} = useContext(UserContext)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
   })
    .then(res => res.json())
    .then(user => {
      if (!user.errors) {
        login(user)
        navigate('/games')
      } else {
        const errorsList = user.errors.map(e => <li>{e}</li>)
        setErrors(errorsList)
      }
     })
  
    }

  return (
    <div>
      <ul>{errors}</ul> 
    <Container maxWidth="false" style={{ background: "white" }}>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <FormControl sx={{ m: 2 }}>
            <Typography
              justifySelf={"center"}
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Login
            </Typography>
            <TextField
              sx={{ m: 2 }}
              required
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
            <TextField
              sx={{ m: 2 }}
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <Button sx={{ m: 2 }} onClick={handleSubmit} variant="contained">
              Login
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            align="center"
            justify="center"
          >
            Sign Up Instead
          </Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default Login;
