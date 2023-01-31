import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "./Context/User";

function SignUp() {
  const {signup} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const userObj = {
      username: username,
      password: password,
    };
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((r) => r.json())
      .then(user => {
        if (!user.errors) {
          signup(user)
          navigate('/')
        } else {
          const errorsList = user.errors.map(e => <li>{e}</li>)
          setErrors(errorsList)
        }
     })
  }

  return (
    <Container maxWidth="false" style={{ background: "white" }}>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <FormControl sx={{ m: 2 }}>
            <Typography justifySelf={"center"}
                style={{ fontSize: "2rem", fontWeight: "bold" }}>Sign Up Here</Typography>
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
              Sign Up
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center" justify="center">
          <Button
            variant="contained"
            component={Link}
            to="/login"
            align="center"
            justify="center"
          >
            Log in Instead
          </Button>
        </Grid>
      </Grid>
      <ul style={{ fontSize: "1.5rem", fontWeight: "bold", color: "red", background: "white"}}>{errors}</ul>
    </Container>
  );
}

export default SignUp;
