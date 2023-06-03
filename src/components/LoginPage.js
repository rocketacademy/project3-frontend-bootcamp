import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  const [state, setState] = useState({ emailInput: "", passwordInput: "" });
  const navigate = useNavigate();

  // const context = useContext(UserContext);

  // useEffect(() => {
  //   if (context.loggedInUser != null) {
  //     navigate("/");
  //   }
  // }, [context.loggedInUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast
      .promise(loginWithRedirect(), {
        pending: "Logging in...",
        success: "Successfully logged in!",
        error: "Oops, check your email and password.",
      })
      .then((userCredential) => {
        console.log("somebody has signed in");
      })

      .then(() => {
        setState({ emailInput: "", passwordInput: "" });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("theres is an error signing in");
      });
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} my={5}>
      <Paper sx={{ px: 5, py: 4, my: 7 }} elevation={0}>
        <Typography variant="h1" sx={{ fontFamily: "'Yeseva One', cursive" }}>
          Reuben & Daniel's Ecommerce Stores
        </Typography>
      </Paper>
      <Typography variant="h2">Join Our Ecommerce Store Today.</Typography>
      <form onSubmit={handleSubmit}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          mt={2}
        >
          <TextField
            required
            size="small"
            label="Email"
            value={state.emailInput}
            name="emailInput"
            type="email"
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            size="small"
            value={state.passwordInput}
            name="passwordInput"
            type="password"
            label="Password"
            onChange={handleChange}
          ></TextField>
          <Button type="submit" variant="contained">
            Login
          </Button>
          <br />
          <Typography variant="h4">Not part of the community yet?</Typography>
          <Link to="signup">
            <Button variant="contained">sign up</Button>
          </Link>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginPage;
