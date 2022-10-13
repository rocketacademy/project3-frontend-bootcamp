import * as React from "react";
// ----- import from MUI -----
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// ----- import from local files -----
import Logo from "../images/Logo.png";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HeaderBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={Logo} alt="logo" />
          </IconButton>
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
          <Box position="absolute" right="0px" sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderBar;
