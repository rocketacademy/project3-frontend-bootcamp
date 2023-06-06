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


import { toast } from "react-toastify";
import NavBar from "./NavBar"
import ItemListingStyle from "./ItemListingStyle.css"

/* const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
})); */

const ItemListing = () => {
	return (
		<div>
			<NavBar />
			<h1>Product Title</h1>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Box sx={{
						backgroundColor: "primary.main",
						color: 'white',
						height: '30rem',
					}}>
						<h2>Product Image</h2>
					</Box>
				</Grid>
				<Grid item xs={8}>
					<Box sx={{
						backgroundColor: "primary.light",
						color: 'white',
						height: '30rem',
					}}>
						<h2>Product Details</h2>
						<p>Product Title</p>
						<p>Price</p>
						<p>Quantity Available</p>
						<p>Description</p>
						<br />
						<Button sx={{
							color: "white",
							backgroundColor: "orange"
						}} variant="outlined">Add to Cart</Button>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{
						backgroundColor: "aquamarine",
						color: 'black',
						height: '40rem',
					}}>
						<h2>Reviews</h2>
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}
export default ItemListing;