import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-uun7isc4ev72mwao.us.auth0.com"
    clientId="3W0J5OIbWwS9eOsnxMoH0cH1bNJebj9x"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
