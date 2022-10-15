import React from "react";
// ----- import from Mui -----
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ReservationPreview = (props) => {
  console.log(props.data);
  return (
    <Card>
      <CardContent>{`${props.data}`}</CardContent>
    </Card>
  );
};

export default ReservationPreview;
