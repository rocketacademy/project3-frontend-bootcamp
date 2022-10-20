import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VillaIcon from "@mui/icons-material/Villa";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        PaperProps={{
          style: {
            // background: "transparent",
            border: "none",
            // opacity: 0.5,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ mt: 8 }} />
        <List>
          <ListItem button component={Link} to="/PropertiesMain">
            <ListItemIcon>
              <VillaIcon />
            </ListItemIcon>
            <ListItemText primary="Properties" />
          </ListItem>
          <ListItem button component={Link} to="/Reservations">
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary="Reservations" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
