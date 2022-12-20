import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyListingPreview from "./PropertyListingPreview";
import { BACKEND_URL } from "../constants.js";

const ChapterPosts = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    
      const getProperties = async () => {
        axios
          .get(`${BACKEND_URL}/posts`, {
            params: {
              cadetId: cadetId,
            },
          })
          .then((response) => {
            setListings(response.data);
          });
      };

      getProperties();
    
  }, [user]);

  const listingPreviews = listings.map((properties) => (
    <Grid item xs={2} sm={4} md={4}>
      <PropertyListingPreview data={properties} />
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
          <PropertyListingPreview data={properties} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyListingPreviewList;