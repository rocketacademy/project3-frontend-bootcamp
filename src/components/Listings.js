import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
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


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';

import data from './data.js';

import "./ListingsStyle.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Listings = () => {
  const { logout, isAuthenticated, getAccessTokenSilently, user, isLoading } =
    useAuth0();
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "" });
  const accessToken = localStorage.getItem("accessToken");



  // GET TOKEN AND EMAIL ON MOUNT:
  useEffect(() => {
    const getTokenAndEmail = async () => {
      const domain = process.env.REACT_APP_DOMAIN;
      console.log("domain:", domain);
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUDIENCE,
            scope: "read:current_user",
          },
        });
        console.log("token:", token);
        localStorage.setItem("accessToken", token);

        if (isAuthenticated && user) {
          setState({
            email: user.email,
          });
          console.log("user email:", user.email);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTokenAndEmail();
  }, [getAccessTokenSilently, isAuthenticated, user?.sub]);

  // UseEffect here to validate if new user has given backend his user data to populate user table, if no, redirect them to /signupinfo page:
  useEffect(() => {
    const checkUserInfoExists = async () => {
      if (state.email !== "") {
        try {
          const response = await axios.get(
            `${BACKEND_URL}/users/checkuserinfo?email=${state.email}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(response.data);
          // Check the response to determine if the project exists
          if (!response.data.error) {
            console.log("user info exists!");
          } else {
            console.log("user info does not exist!");
            navigate("/signupinfo");
          }
        } catch (error) {
          console.error(
            "Error occurred while checking user info exists on db:",
            error
          );
        }
      }
    };
    checkUserInfoExists();
  }, [state?.email, accessToken]);




  if (isLoading) {
    // Show loading state
    return (
      <div>
        <h1>Loading...Your patience is appreciated.</h1>

      </div>
    );
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >

    </Box>
  );



  return
  isAuthenticated ? (
    <div>
      <NavBar />
      <h1 className="centralized">ADD TO CART NOW! WHILE STOCKS LAST!</h1>

      <br />
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          {
            data.map((prod) => {
              return (
                <>
                  <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography>
                          <strong className="prod_title">{prod.prod_title}</strong>
                        </Typography>
                        <Typography>
                          <p className="prod_price">{prod.prod_price}</p>
                        </Typography>
                        <Typography>
                          <p className="prod_qty">Quantity : {prod.prod_quantity}</p>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button variant="outlined" className="add-2cart">Add to Cart</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              )
            })
          }
        </Grid>
      </Box>
    </div>) : (
    // content rendered for users that are NOT signed in NOR logged in:
    <div>
      <h2>You are not logged in or signed up.</h2>
      <Button onClick={() => navigate("/")} variant="contained">
        Sign Up/Login Here
      </Button>
    </div>
  );

};

export default Listings;
