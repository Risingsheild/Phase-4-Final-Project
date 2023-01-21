import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, FormControl, Grid, TextField, Typography} from "@mui/material";

function Login({ setUser }) {
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
        navigate('/')
      } else {
        const errorsList = user.errors.map(e => <li>{e}</li>)
        setErrors(errorsList)
      }
     })
  
    }

  return (
    <Container maxWidth="false" style={{ background: "white" }}>
      {  errors ?
         errors.map((e) => (
            <li key={e} style={{ color: "red", fontWeight: "bold" }}>Error: {e}</li>
          ))
        : null }
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
  );
}

export default Login;
