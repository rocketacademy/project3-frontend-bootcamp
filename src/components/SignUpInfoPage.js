import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const SignUpInfoPage = () => {
  const { logout, isAuthenticated } = useAuth0();

  const [state, setState] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    buyer_address: "",
    seller_address: "",
  });
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/");
  //   }
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   toast
  //     .promise(
  //       createUserWithEmailAndPassword(
  //         auth,
  //         state.emailInput,
  //         state.passwordInput
  //       ),
  //       {
  //         pending: "Creating an account...",
  //         success: "Successfully created an account!",
  //         error: "Oops, something went wrong. Try again!",
  //       }
  //     )
  //     .then(() => {
  //       toast.success("🐝 Successfully created a new account!");
  //       setState({ emailInput: "", passwordInput: "" });
  //     })
  //     .then(() => {
  //       navigate("/createprofile");
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    return console.log("you've submitted user info!");
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
    console.log(state);
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} my={5}>
      <Typography variant="h2">
        Thank you for signing up! Welcome to our community!
      </Typography>
      <Typography variant="subtitle1">
        Please kindly provide your details below to make your shopping a breeze:
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
            autoComplete="off"
            value={state.email}
            size="small"
            id="email"
            type="email"
            label="Email"
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            autoComplete="off"
            value={state.first_name}
            size="small"
            id="first_name"
            type="first_name"
            label="First Name"
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            autoComplete="off"
            value={state.last_name}
            size="small"
            id="last_name"
            type="last_name"
            label="Last Name"
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            autoComplete="off"
            value={state.phone}
            size="small"
            id="phone"
            type="phone"
            label="Phone"
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            autoComplete="off"
            value={state.buyer_address}
            size="small"
            id="buyer_address"
            type="buyer_address"
            label="Buyer Address"
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            autoComplete="off"
            value={state.seller_address}
            size="small"
            id="seller_address"
            type="seller_address"
            label="Seller Address"
            onChange={handleChange}
          ></TextField>
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </Stack>
      </form>
      <br />
      <br />
      <Button variant="contained" color="secondary">
        Back to main
      </Button>
    </Stack>
  );
};

export default SignUpInfoPage;
