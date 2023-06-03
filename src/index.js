import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirectUri: window.location.origin,
      audience: process.env.REACT_APP_AUDIENCE,
      scope: "read:current_user update:current_user_metadata",
    }}
    // useRefreshTokens={true}
    // useRefreshTokensFallback={false}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
