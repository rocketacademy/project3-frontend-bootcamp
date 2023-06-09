import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import data from "./data"

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

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );



  return (
    isAuthenticated && (
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
                    {/* <Typography>{prod.prod_title}</Typography>
                <Typography>{prod.prod_price}</Typography>
                <Typography>{prod.prod_quantity}</Typography> */}


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



      </div>
    )
  )
}
export default Listings;

