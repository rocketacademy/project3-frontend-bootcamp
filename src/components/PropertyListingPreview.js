import React from "react";
import Card from "react-bootstrap/Card";

const PropertyListingPreview = (props) => {
  console.log(props.data)
  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Title>{props.data.id}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PropertyListingPreview;
