import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// ----- import from Mui -----
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container } from "@mui/system";

// ----- Constant Variable -----
const BACKEND_URL = "http://localhost:8080";

const Reservations = () => {
  const [reservationId, setReservationId] = useState();
  const [reservation, setReservation] = useState();

  useEffect(() => {
    if (reservationId) {
      axios
        .get(`${BACKEND_URL}/reservations/${reservationId}`)
        .then((response) => {
          setReservation(response.data);
        });
    }
  }, [reservationId]);

  const params = useParams();
  if (reservationId !== params.reservationId) {
    setReservationId(params.reservationId);
  }

  const reservationDetails = [];
  if (reservation) {
    for (const key in reservation) {
      reservationDetails.push(
        <CardContent key={key}>{`${key}: ${reservation[key]}`}</CardContent>
      );
    }
  }
  console.log(reservationDetails);
  console.log(reservation);
  console.log(reservationId);
  return (
    <Container>
      <Link to="/">Home</Link>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>{reservationDetails}</CardContent>
      </Card>
    </Container>
  );
};

export default Reservations;
