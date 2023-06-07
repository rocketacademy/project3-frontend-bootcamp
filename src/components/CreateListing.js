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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import NavBar from "./NavBar";


const CreateListing = () => {
	const [category, setCategory] = useState('');

	const handleCatChange = (e) => {
		setCategory(e.target.value);
	}
	return (
		<>
			<Box m={2} p={2}>
				<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
					Create Your Listing
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
					Type in your product details to create a new listing.
				</Typography>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography variant="h6" align="center" padding={1} color="textSecondary" gutterBottom>
								Product Title:
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								label="Name of Product"
								type="text"
								color="primary"
							/>
						</Grid>
					</Grid>
				</Box>
				<br />
				<Box>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography variant="h6" align="center" padding={1} color="textSecondary" gutterBottom>
								Category:
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<FormControl sx={{ width: "100%" }}>
								<InputLabel id="demo-simple-select-label">Category</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={category}
									label="Category"
									onChange={handleCatChange}
								>
									<MenuItem value={10}>Bags</MenuItem>
									<MenuItem value={20}>Bicycles</MenuItem>
									<MenuItem value={30}>Clothes</MenuItem>
									<MenuItem value={40}>Computers</MenuItem>
									<MenuItem value={50}>Electrical Appliances</MenuItem>
									<MenuItem value={60}>Household Items</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>


				</Box>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography variant="h6" align="center" padding={1} color="textSecondary" gutterBottom>
								Selling Price (per item):
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								label="Selling price of your product"
								type="text"
								color="primary"
							/>
						</Grid>
					</Grid>
				</Box>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography variant="h6" align="center" padding={1} color="textSecondary" gutterBottom>
								Quantity Available:
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								label="Quantity available for sale"
								type="text"
								color="primary"
							/>
						</Grid>
					</Grid>
				</Box>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography variant="h6" align="center" padding={1} color="textSecondary" gutterBottom>
								Description:
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								label="Product Description"
								type="text"
								color="primary"
							/>
						</Grid>
					</Grid>
				</Box>
				<br />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography variant="h6" align="center" padding={1} color="textSecondary" gutterBottom>
								Picture:
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								label="Product Image in JPEG or PNG"
								type="text"
								color="primary"
							/>
						</Grid>
					</Grid>
				</Box>
				{/* <Stack spacing={4}>
					<Stack direction="row" spacing={2}>
						<form>
							<TextField
								label="Name of Product"
								type="text"
								color="primary"
							/>
							<br />
							<TextField
								label="Category"
								type="text"
								color="secondary"
							/>
							<br />
							<TextField
								label="Price"
								type="text"
							/>
							<br />
							<TextField
								label="Description"
								type="text"
							/>
						</form>
					</Stack>
				</Stack> */}
			</Box>
			<Button type="submit" variant="contained">Submit</Button>
			<br />
		</>


	)
}
export default CreateListing;