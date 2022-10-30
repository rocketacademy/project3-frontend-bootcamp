import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";

import { BACKEND_URL } from "../constants.js";

const PropertyListing = (props) => {
  const [propertyName, setpropertyName] = useState();
  const [property, setProperty] = useState({});

  useEffect(() => {
    // If there is a listingId, retrieve the listing data
    if (propertyName) {
      axios
        .get(`${BACKEND_URL}/properties/${propertyName}`)
        .then((response) => {
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

  // const handleClick = () => {
  //   axios.put(`${BACKEND_URL}/properties/${propertyName}`).then((response) => {
  //     console.log(response.data);
  //     setProperty(response.data);
  //   });
  // };

  return (
    <Box>
      <Link to="/">Home</Link>
      <Card>
        <Card.Body>
          <img
            src={`${property.image_url}`}
            // srcSet={`${property.image_url}?w=248&fit=crop&auto=format&dpr=2`}
            width="50%"
            alt={property.home_name}
            loading="lazy"
          />
          <h1>{property.home_name}</h1>
          <p>
            {property.total_occupancy} guests · {property.total_bedrooms}{" "}
            bedrooms · {property.total_bathrooms} bath
          </p>
          <hr
            style={{
              background: "#f0f0f0",
              float: "center",
            }}
          />
          <h5>{property.summary}</h5>
          <hr
            style={{
              background: "#f0f0f0",
              float: "center",
            }}
          />
          <h3>What this place offers</h3>
          {/* <p>
            {{
              if({ property } = true) {},
            }}
          </p> */}

          <hr
            style={{
              background: "#f0f0f0",
              float: "center",
              // width: "700px",
              // color: "lime",
              // borderColor: "lime",
              // height: "3px",
            }}
          />
          {propertyDetails}
        </Card.Body>
      </Card>
      <br />
    </Box>
  );
};

export default PropertyListing;
