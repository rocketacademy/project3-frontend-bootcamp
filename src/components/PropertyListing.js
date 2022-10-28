import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";

import { BACKEND_URL } from "../constants.js";

const PropertyListing = () => {
  const [propertyName, setpropertyName] = useState();
  const [property, setProperty] = useState({});

  useEffect(() => {
    // If there is a listingId, retrieve the listing data
    if (propertyName) {
      axios
        .get(`${BACKEND_URL}/properties/${propertyName}`)
        .then((response) => {
          console.log(response);
          setProperty(response.data);
        });
    }
    // Only run this effect on change to listingId
  }, [propertyName]);

  // Update listing ID in state if needed to trigger data retrieval
  const params = useParams();
  // console.log(params)
  if (propertyName !== params.propertyName) {
    setpropertyName(params.propertyName);
  }

  // Store a new JSX element for each property in listing details
  const propertyDetails = [];
  if (property) {
    for (const key in property) {
      propertyDetails.push(
        <Card.Text key={key}>{`${key}: ${property[key]}`}</Card.Text>
      );
    }
  }

  const handleClick = () => {
    axios.put(`${BACKEND_URL}/properties/${propertyName}`).then((response) => {
      console.log(response.data);
      setProperty(response.data);
    });
  };

  return (
    <Box>
      <Link to="/">Home</Link>
      <Card bg="dark">
        <Card.Body>{propertyDetails}</Card.Body>
      </Card>
      <br />
    </Box>
  );
};

export default PropertyListing;
