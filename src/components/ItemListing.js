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
			<Box m={2} p={2}>
				<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
					Item Listing
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
					Details of the product you are viewing
				</Typography>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Box
								component="img"
								sx={{
									/* height: 233,
									width: 350, */
									/* maxHeight: { xs: 233, md: 167 },
									maxWidth: { xs: 350, md: 250 }, */

									height: 333,
									width: 500,
									maxHeight: { xs: 233, md: 167 },
									maxWidth: { xs: 350, md: 250 }
								}}
								alt="The house from the offer."
								src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
							/>
						</Grid>
						<Grid item xs={8}>
							<Typography variant="h6" align="left" color="textSecondary" gutterBottom>
								Bungalow
							</Typography>
							<Typography variant="h6" align="left" color="textSecondary" gutterBottom>
								House
							</Typography>
							<Typography variant="h6" align="left" color="textSecondary" gutterBottom>
								$$6.9m
							</Typography>
							<Typography variant="h6" align="left" color="textSecondary" gutterBottom>
								1
							</Typography>
							<Typography variant="h6" align="left" color="textSecondary" gutterBottom>
								This fine Good-Class-Bungalow is located near Holland Village, a stone's throw away from the bustling melting pot of bars, restaurants and night clubs.
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<br />
				<Box sx={{ flexgrow: 1, width: "100%" }}>
					<Stack>
						<Box sx={{ height: "10rem", bgcolor: "blue", padding: "1rem" }}>
							<Typography variant="h6" align="left" color="black" gutterBottom>
								Good location, very good investment for future generations!
							</Typography>

						</Box>
						<Box sx={{ height: "10rem", bgcolor: "yellow", padding: "1rem" }}>
							<Typography variant="h6" align="left" color="black" gutterBottom>
								Good location, very good investment for future generations!
							</Typography>
						</Box>
						<Box sx={{ height: "10rem", bgcolor: "grey", padding: "1rem" }}>
							<Typography variant="h6" align="left" color="black" gutterBottom>
								Good location, very good investment for future generations!
							</Typography>
						</Box>

					</Stack>
				</Box>
			</Box>
			{/* <h1>Product Title</h1>
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
			</Grid> */}
		</div>
	)
}
export default ItemListing;