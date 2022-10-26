import axios from "axios";
import React, { useEffect, useState } from "react";
import ReservationPreview from "../components/ReservationPreview";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

// ----- Constant Variable -----
const BACKEND_URL = "http://localhost:8080";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/Reservations`).then((response) => {
      setReservations(response.data);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customer_name",
      headerName: "Visitor Name",
      width: 150,
      valueGetter: (params) => {
        return params.row.customer.name;
      },
    },
    {
      field: "properties_home_type",
      headerName: "Home Type",
      width: 150,
      valueGetter: (params) => {
        return params.row.properties.home_type;
      },
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

  const rows = [...reservations];

  return (
    <Box
      sx={{
        height: 400,
        width: 750,
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
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

export default Reservations;
