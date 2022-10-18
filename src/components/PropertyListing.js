import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { BACKEND_URL } from "../constants.js";

const PropertyListing = () => {
  const [propertyId, setPropertyId] = useState();
  const [property, setProperty] = useState({});

  useEffect(() => {
    // If there is a listingId, retrieve the listing data
    if (propertyId) {
      axios.get(`${BACKEND_URL}/properties/${propertyId}`).then((response) => {
        setProperty(response.data);
      });
    }
    // Only run this effect on change to listingId
  }, [propertyId]);

  // Update listing ID in state if needed to trigger data retrieval
  const params = useParams();
  if (propertyId !== params.propertyId) {
    setPropertyId(params.propertyId);
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
    axios.put(`${BACKEND_URL}/properties/${propertyId}`).then((response) => {
      setProperty(response.data);
    });
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Card bg="dark">
        <Card.Body>
          {propertyDetails}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default PropertyListing;
