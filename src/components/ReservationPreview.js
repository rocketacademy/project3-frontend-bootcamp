import React from "react";
// ----- import from Mui -----
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ReservationPreview = (props) => {
  console.log(props.data);
  let startDate = props.data.start_date;
  let newDate = startDate.toLocaleString();
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Reservation ID: {props.data.id}
        </Typography>
        <Typography variant="h5" component="div">
          Customer ID: {props.data.customer_id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Property ID: {props.data.properties_id}
        </Typography>
        <Typography variant="body2">
          Start Date: {newDate}
          <br />
          End Date: {props.data.end_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReservationPreview;
