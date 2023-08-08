import React from "react";
import Hero from "../images/hero-image.png";
import { Box, Button } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Box
        className="hero"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img src={Hero} alt="hero" />
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            left: "10%",
            bottom: "0%",
            transform: "translate(-50%, -50%)",
          }}
        >
          SHOP NOW
        </Button>
      </Box>
    </>
  );
};

export default Homepage;
