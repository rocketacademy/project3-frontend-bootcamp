import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/matieral/Grid";
import Paper from "@mui/material/Paper";

import { toast } from "react-toastify";

const Listings = () => {
	return (
		<div>
			<h1>Listings</h1>
			<h2>Welcome! </h2>
			<br />
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={4}>
					<Item>Product 1</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 2</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 3</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 4</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 5</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 6</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 7</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 8</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Product 9</Item>
				</Grid>
			</Grid>

		</div>
	)
}
export default Listings;