import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { User } from "./components/User";
import { EditUser } from "./components/EditUser";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="user/:id"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              component={<User />}
            />
          }
        />
        <Route
          path="user/edit"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              component={<EditUser />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
