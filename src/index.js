import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";

import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTHO_DOMAIN}
    clientId={process.env.REACT_APP_AUTHO_CLIENT_ID}
    authorizationParams={{
      redirect_uri: "http://localhost:3000/",
      audience: process.env.REACT_APP_AUDIENCE,
      scope:process.env.REACT_APP_SCOPE
    }}
  >
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Auth0Provider>
);
