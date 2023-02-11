import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AuthPage } from "./components/AuthPage";
import { User } from "./components/User";
import { EditUser } from "./components/EditUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/edit" elemetn={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
