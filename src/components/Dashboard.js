import React, { useEffect, useState } from "react";
import axios from "axios";
// ----- imports from local files -----
import TitlebarBelowImageList from "./ImageList";
import { BACKEND_URL } from "../constants.js";
// ----- imports from MUI -----
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/properties`).then((response) => {
      setProperties(response.data);
    });
    // Only run this effect on component mount
  }, []);

  console.log(properties);
  const imageListMap = properties.map((prop) => (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key={prop.id}>
        <img
          src={`${prop.image_url}?w=248&fit=crop&auto=format`}
          srcSet={`${prop.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={prop.home_name}
          loading="lazy"
        />
        <ImageListItemBar
          title={prop.home_name}
          subtitle={<span>by: {prop.home_type}</span>}
          position="below"
        />
      </ImageListItem>
    </ImageList>
  ));

  return (
    <ImageList sx={{ width: "50vw", height: "50vh" }}>
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
  );
}
