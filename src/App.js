import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BasePage } from "./components/BasePage";
import { User } from "./components/User";
import { EditUser } from "./components/EditUser";
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  const { isAuthenticated } = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/users/:id" element={<User />} />
          <Route
            path="/users/edit"
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={<EditUser />}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
