import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import ErrorPage from "./error-page";
import Reservations from "./routes/Reservations";
import PropertiesMain from "./routes/PropertiesMain";
import { Auth0Provider } from "@auth0/auth0-react";
import NewPropertyForm from "./components/NewPropertyForm";
import PropertyListing from "./components/PropertyListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "PropertiesMain",
        element: <PropertiesMain />,
      },
      {
        path: "properties/:propertyId",
        element: <PropertyListing />,
      },
      {
        path: "PropertiesListing/new",
        element: <NewPropertyForm />,
      },
      {
        path: "Reservations",
        element: <Reservations />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-l8x5jjx2.us.auth0.com" //move this to .env
    clientId="gVfAjkawycGi5Y19jv8OSm3gSrKN0Bpd" //move this to .env
    redirectUri={window.location.origin}
    audience="https://carousell/api"
    scope="read:current_user update:current_user_metadata"
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
