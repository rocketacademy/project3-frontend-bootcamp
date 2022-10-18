import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import ErrorPage from "./error-page";
import Reservations from "./routes/Reservations";

import PropertiesMain from "./routes/PropertiesMain";
import NewPropertyForm from "./components/NewPropertyForm";
import PropertyListing from "./components/PropertyListing";

import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedApp = withAuthenticationRequired(App);

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate("/");
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithRedirectCallback
        domain="dev-l8x5jjx2.us.auth0.com" //move this to .env
        clientId="gVfAjkawycGi5Y19jv8OSm3gSrKN0Bpd" //move this to .env
        redirectUri={window.location.origin}
        audience="https://carousell/api"
        scope="read:current_user update:current_user_metadata"
      >
        <ProtectedApp />
      </Auth0ProviderWithRedirectCallback>
    ),
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
root.render(<RouterProvider router={router} />);
