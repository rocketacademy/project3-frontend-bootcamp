import React from "react";
import { Link } from "react-router-dom";

// import { Form } from "react-router-dom";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PropertyListingPreviewList from "../components/PropertyListingPreviewList";

export default function PropertiesMain() {

  return (
    <Container>
      <br />
      Properties page
      <br />
      <Link to="/PropertiesListing/new">Add new listing</Link>
      <PropertyListingPreviewList />
      <br />
      <br />
    </Container>
  );
}
