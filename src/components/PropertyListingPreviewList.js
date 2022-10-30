import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropertyListingPreview from "./PropertyListingPreview";
import { BACKEND_URL } from "../constants.js";

const PropertyListingPreviewList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/properties`).then((response) => {
      setListings(response.data);
    });
    // Only run this effect on component mount
  }, []);
  console.log(listings);

  const listingPreviews = listings.map((properties) => (
    <Grid item xs={2} sm={4} md={4}>
      <Link to={`/properties/${properties.id}`} key={properties.id}>
        <PropertyListingPreview data={properties} />
      </Link>
    </Grid>
  ));

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      
    >
      {listings.map((properties) => (
        <Grid item xs={2} sm={4} md={4}>
          <Link to={`/properties/${properties.id}`} key={properties.id}>
            <PropertyListingPreview data={properties} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyListingPreviewList;
