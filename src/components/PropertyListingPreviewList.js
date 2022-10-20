import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropertyListingPreview from "./PropertyListingPreview";
import { BACKEND_URL } from "../constants.js";

const PropertyListingPreviewList = () => {
  const [listings, setListings] = useState([]);
  // console.log("DISPLAY PROPERTY LISTING")

  useEffect(() => {
    axios.get(`${BACKEND_URL}/properties`).then((response) => {
      setListings(response.data);
    });
    // Only run this effect on component mount
  }, []);
  // console.log(listings)

  const listingPreviews = listings.map((properties) => (
    <Link to={`/properties/${properties.home_name}`} key={properties.home_name}>
      <PropertyListingPreview data={properties} />
    </Link>
  ));

  return <div>{listingPreviews}</div>;
};

export default PropertyListingPreviewList;
