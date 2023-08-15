import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../Components/UserContext";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const { currUser, setCurrUser } = useUserContext();

  useEffect(() => {
    console.log(currUser);
    if (currUser === null) {
      const localAccess = JSON.parse(localStorage.getItem("currUser"));
      console.log(localAccess);
      setCurrUser(localAccess);
    }
  }, [currUser]);

  const handleUpdate = async () => {
    console.log(firstName, lastName, username, email, mobileNumber);
    try {
      // Send the updated user data to your backend API
      const response = await axios.post(`http://localhost:8080/users`, {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: mobileNumber,
      });
      console.log(response);
      // You can also show a success message to the user if needed
    } catch (error) {
      console.log(error);
      // Handle error, show an error message, etc.
    }
  };
  return (
    <>
      <Box>
        <Typography variant="h3">My profile</Typography>
        <Typography variant="h5">Manage and protect your account</Typography>
        <hr />
        <Box
          sx={{
            px: "20px",
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <TextField
            required
            id="username"
            label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
          <TextField
            required
            id="firstname"
            label="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
          <TextField
            required
            id="lastname"
            label="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
          <TextField
            required
            id="email"
            label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
          <TextField
            required
            id="phone"
            label="phone"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            InputProps={{
              style: { backgroundColor: "white" },
            }}
          />
          <Button onClick={handleUpdate} variant="contained">
            
            Update
          
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
