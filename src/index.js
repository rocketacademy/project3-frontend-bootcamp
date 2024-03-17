import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import AuthWrapper from "./components/AuthWrapper";
import Forum from "./components/Forum/Forum";
import ForumMainPage from "./components/Forum/ForumMainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={`${window.location.origin}/home`}
    audience={process.env.REACT_APP_AUDIENCE}
    scope="read:current_user update:current_user_metadata"
  >
    <BrowserRouter>
      <Routes>
        {/* Route that provides base app UI */}
        <Route path="/" element={<App />}>
          {/* Route that matches all other paths */}
          <Route
            index
            path="/home"
            element={
              <AuthWrapper>
                <Home />
              </AuthWrapper>
            }
          />
          <Route path="/forum" element={<Forum />}>
            <Route path="" element={<ForumMainPage />} />
          </Route>
          {/* <Route path="*" element={"Nothing here!"} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
