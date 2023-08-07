import React from "react";
import Hero from "../images/hero-image.png";
import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <img src={Hero} alt="hero"></img>
      </Box>
    </>
  );
};

export default Homepage;
