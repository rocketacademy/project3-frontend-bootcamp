import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReservationPreview from "./ReservationPreview";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

// ----- Constant Variable -----
const BACKEND_URL = "http://localhost:8080";

const ReservationsOverview = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/Reservations`).then((response) => {
      setReservations(response.data);
    });
  }, []);

  // const reservationOverview = reservations.map((reservation) => (
  //   <Link to={`/Reservations/${reservation.id}`} key={reservation.id}>
  //     <ReservationPreview data={reservation} />
  //   </Link>
  // ));

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customer_id",
      headerName: "Customer ID",
      width: 150,
      editable: true,
    },
    {
      field: "properties_id",
      headerName: "Properties ID",
      width: 150,
      editable: true,
    },
    {
      field: "start_date",
      headerName: "Check In",
      type: "date",
      width: 150,
      editable: true,
    },
    {
      field: "end_date",
      headerName: "Check Out",
      type: "date",
      width: 150,
      editable: true,
    },
  ];

  console.log(reservations);
  const rows = [...reservations];
  // if (reservations){
  //   for (const key in reservations) {
  //     rows.push(

  //     );
  //   }
  // }
  // const rows = [
  //   { id: 1, customerId: "Snow", propertiesId: "Jon", startDate: 20/10/2022, endDate: 22/10/2022 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  return (
    <Box
      sx={{
        height: 400,
        width: "50%",
        position: "relative",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default ReservationsOverview;
