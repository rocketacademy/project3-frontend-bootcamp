import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [state, setState] = useState({ emailInput: "", passwordInput: "" });
  const navigate = useNavigate();

  //   useEffect(() => {
  //    insert logic to check login status, if user is logged in then navigate straight to default home page for logged in users .
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //   toast
    //     .promise(
    //       signInWithEmailAndPassword(auth, state.emailInput, state.passwordInput),
    //       {
    //         pending: "Logging in...",
    //         success: "Successfully logged in!",
    //         error: "Oops, check your email and password.",
    //       }
    //     )
    //     .then((userCredential) => {
    //       console.log("somebody has signed in");
    //     })

    //     .then(() => {
    //       setState({ emailInput: "", passwordInput: "" });
    //     })
    //     .then(() => {
    //       navigate("/");
    //     })
    //     .catch((error) => {
    //       console.log("theres is an error signing in");
    //     });
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} my={5}>
      <Paper sx={{ px: 5, py: 4, my: 7 }} elevation={0}>
        <Typography variant="h1" sx={{ fontFamily: "Arial" }}>
          OPUS
        </Typography>
      </Paper>
      <Typography variant="h2">
        Login to view bookings or make new ones.
      </Typography>
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
          <br />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <br />
          <Typography variant="h4">Not part of Opus yet?</Typography>
          <br />
          <Link to="/signup">
            <Button variant="contained">sign up</Button>
          </Link>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginPage;
