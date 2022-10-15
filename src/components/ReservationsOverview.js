import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReservationPreview from "./ReservationPreview";

// ----- Constant Variable -----
const BACKEND_URL = "http://localhost:8080";

const ReservationsOverview = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/Reservations`).then((response) => {
      setReservations(response.data);
    });
  }, []);

  const reservationOverview = reservations.map((reservation) => (
    <Link to={`/Reservations/${reservation.id}`} key={reservation.id}>
      <ReservationPreview data={reservation} />
      console.log(reservation.id);
    </Link>
  ));

  return <Container>{reservationOverview}</Container>;
};

export default ReservationsOverview;
