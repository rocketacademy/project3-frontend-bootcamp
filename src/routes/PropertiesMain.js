import React from "react";
import { Link } from "react-router-dom";

// import { Form } from "react-router-dom";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import PropertyListingPreviewList from "../components/PropertyListingPreviewList";

export default function PropertiesMain() {
  // const contact = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://placekitten.com/g/200/200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <Container>
      Properties page
      <br />
      <Link to="/PropertiesListings/new">Add new listing</Link>
      <br />
      <br />
      <PropertyListingPreviewList />
    </Container>
  );
}
