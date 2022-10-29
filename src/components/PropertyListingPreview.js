import React from "react";
// ----- imports from bootstrap -----
// import Card from "react-bootstrap/Card";
// ----- imports from Mui -----
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

const PropertyListingPreview = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.data.image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.home_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Fab variant="extended" color="primary" aria-label="edit">
          <EditIcon sx={{ mr: 1 }} />
          Edit
        </Fab>
      </CardActions>
    </Card>
    // <Card bg="dark">
    //   <Card.Body>
    //     <Card.Title>{props.data.id}</Card.Title>
    //   </Card.Body>
    // </Card>
  );
};

export default PropertyListingPreview;
