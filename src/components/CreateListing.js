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
import NavBar from "./NavBar";


const CreateListing = () => {

	return (
		<>
			<Box m={2} p={2}>
				<Stack spacing={4}>
					<Stack direction="row" spacing={2}>
						<TextField label="Name" />
					</Stack>
				</Stack>
			</Box>
		</>


	)
}
export default CreateListing;