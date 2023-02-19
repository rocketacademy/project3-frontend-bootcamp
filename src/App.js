import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { User } from "./components/User";
import { EditUser } from "./components/EditUser";
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  const { isAuthenticated } = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              component={<User />}
            />
          }
        />
        <Route
          path="/users/edit"
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
