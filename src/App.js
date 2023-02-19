import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import "./App.css";
import "./assets//fonts/font.css";
import { EditProfile } from "./pages/EditProfile";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";

import Profile from "./pages/UserProfile";
import CreateProfile from "./pages/CreateProfile";
import UserIndividualListing from "./pages/UserIndividualListing";

import CreateListing from "./pages/CreateListing";
import ViewListing from "./pages/ViewListing";
import EditListing from "./pages/EditListing";

function App() {
  let { user_id } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path=":user_id">
          <Route path="homepage" element={<HomePage />} />

          <Route path="listings/1" element={<ViewListing />} />
          <Route path="listings/2" element={<UserIndividualListing />} />
          <Route path="createlisting" element={<CreateListing />} />
          <Route path="editlisting" element={<EditListing />} />

          <Route path="profile" element={<Profile />} />
          <Route path="createprofile" element={<CreateProfile />} />
          <Route path="settings" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
