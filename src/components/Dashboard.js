import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
// ----- imports from local files -----
import { BACKEND_URL } from "../constants.js";
// ----- imports from MUI -----
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const { getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    if (user) {
      const getProperties = async () => {
        const accessToken = await getAccessTokenSilently({
          audience: "https://stayhere/api",
          scope: "read:current_user",
        });
        console.log(user);
        axios
          .get(`${BACKEND_URL}/properties`, {
            params: {
              ownerEmail: user.email,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            setProperties(response.data);
          });
      };

      getProperties();
    }
  }, [user]);

  // useEffect(() => {
  //   axios.get(`${BACKEND_URL}/properties`).then((response) => {
  //     setProperties(response.data);
  //   });
  //   // Only run this effect on component mount
  // }, []);

  console.log(properties);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          flexGrow: 1,
          fontFamily: "Roboto",
          fontWeight: 600,
          display: "flex",
          ml: 10,
        }}
      >
        Dashboard
      </Typography>
      <ImageList
        sx={{
          width: "500",
          height: "60vh",
        }}
        cols={3}
      >
        {properties.map((prop) => (
          <ImageListItem key={prop.id}>
            <img
              src={`${prop.image_url}?w=248&fit=crop&auto=format`}
              srcSet={`${prop.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={prop.home_name}
              loading="lazy"
            />
            <ImageListItemBar
              title={prop.home_name}
              subtitle={<span>by: {prop.owner_id}</span>}
              position="below"
              sx={{ background: "#FFFFFF" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
