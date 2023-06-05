import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  // sign up button logic to redirect first time users to sign up page on Auth0:
  const handleSignUp = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/signupinfo",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} my={1}>
      <Paper sx={{ px: 5, py: 4, my: 7 }} elevation={0}>
        <Typography variant="h1" sx={{ fontFamily: "'Yeseva One', cursive" }}>
          BENDAN Ecommerce
        </Typography>
      </Paper>
      <Typography variant="h4">
        Because online shopping should be STUPID easy.
      </Typography>
      <br />
      <Button variant="contained" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
      <br />
      <Typography variant="h4">Don't have an account yet?</Typography>
      <br />
      <Button variant="contained" onClick={handleSignUp}>
        Sign Up
      </Button>
    </Stack>
  );
};

export default LoginPage;
