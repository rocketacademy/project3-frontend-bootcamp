import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropertyListingPreview from "./PropertyListingPreview";
import { BACKEND_URL } from "../constants.js";

const PropertyListingPreviewList = () => {
  const [listings, setListings] = useState([]);
  console.log("DISPLAY PROPERTY LISTING");

  useEffect(() => {
    axios.get(`${BACKEND_URL}/properties`).then((response) => {
      setListings(response.data);
    });
    // Only run this effect on component mount
  }, []);
  console.log(listings);

  const listingPreviews = listings.map((properties) => (
    <Grid item xs={2} sm={4} md={3}>
      <Link to={`/properties/${properties.id}`} key={properties.id}>
        <PropertyListingPreview data={properties} />
      </Link>
    </Grid>
  ));

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={3}
      >
        {listingPreviews}
      </Grid>
    </Box>
  );
};

export default PropertyListingPreviewList;
