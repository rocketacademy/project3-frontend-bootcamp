import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropertyListingPreview from "./PropertyListingPreview";
import { BACKEND_URL } from "../constants.js";

const PropertyListingPreviewList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/listings`).then((response) => {
      setListings(response.data);
    });
    // Only run this effect on component mount
  }, []);

  const listingPreviews = listings.map((listing) => (
    <Link to={`/listings/${listing.id}`} key={listing.id}>
      <PropertyListingPreview data={listing} />
    </Link>
  ));

  return <div>{listingPreviews}</div>;
};

export default PropertyListingPreviewList;
