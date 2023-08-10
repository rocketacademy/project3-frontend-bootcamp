import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

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
          <Button variant="contained">Update</Button>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
