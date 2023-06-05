import React, { useContext } from "react";
import { UserContext } from "../App";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import SearchBar from "./UserSearchBar";
import { useNavigate, Outlet } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth0();

  //   const context = useContext(UserContext);
  //   const displayName = context.loggedInUser
  //     ? context.loggedInUser.displayName
  //     : "";

  const benDanButton = () => {
    navigate("/");
  };

  //   const handleProfileClick = () => {
  //     navigate(`/user/${displayName}`);
  //   };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              variant="contained"
              onClick={benDanButton}
              type="button"
              disableElevation
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "'Yeseva One', cursive" }}
              >
                BENDAN
              </Typography>
            </Button>
          </Typography>

          {/* {context.loggedInUser != null ? (
            ""
          ) : ( */}

          {/* )} */}
          {/* 
          <Stack direction="row" spacing={2}>
            {context.loggedInUser != null ? (
              <Stack direction="row" spacing={2}>
                <SearchBar sx={{ width: "100%" }} />
                <Button
                  variant="contained"
                  onClick={handleProfileClick}
                  type="button"
                  disableElevation
                  startIcon="" />}
                >
                  {displayName}
                </Button> */}

          <Button
            variant="contained"
            disableElevation
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            type="button"
          >
            Log Out
          </Button>
          {/* </Stack>
            ) : (
              <Button
                variant="contained"
                // sx={{ width: "50%", m: 1 }}
                onClick={signUpButton}
                type="button"
              >
                Sign Up
              </Button>
            )}
          </Stack> */}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;
