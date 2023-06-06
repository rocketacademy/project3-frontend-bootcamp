import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Stack, TextField, Typography } from "@mui/material";
/* import Typography from '@mui/joy/Typography'; */
/* import Card from "@mui/joy/Card"; */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import NavBar from "./NavBar";
import { toast } from "react-toastify";
import "./ListingsStyle.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Listings = () => {

  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <NavBar />
        <h1 className="centralized">ADD TO CART NOW! WHILE STOCKS LAST!</h1>

        <br />
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
              <Item><strong>Product Title 1</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 2</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 3</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 4</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 5</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 6</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 7</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title </strong>8</Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><strong>Product Title 9</strong></Item>
              <Item>Price</Item>
              <Item>Description</Item>

              <Item>Shipping Details</Item>
              <Item><Button variant="outlined">Add to Cart</Button></Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  )
}
export default Listings;

