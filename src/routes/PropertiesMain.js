import React from "react";
import { Link } from "react-router-dom";

// import { Form } from "react-router-dom";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import PropertyListingPreviewList from "../components/PropertyListingPreviewList";

export default function PropertiesMain() {

  return (
    <Container>
      <br />
      Properties page
      <br />
      <br />
      {/* <button
        onClick={<Link to="/PropertiesListing/new">Add new listing</Link>}
      >
        Add new listing
      </button> */}
      <Button variant = "contained" component={Link} to = "/PropertiesListing/new">Add new listing</Button>
      <Link to="/PropertiesListing/new">Add new listing</Link>
      <br />
      <br />
      <PropertyListingPreviewList />
      <br />
      <br />
    </Container>
  );
}
