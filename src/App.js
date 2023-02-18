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
import Profile from "./pages/UserProfile";
import EditListing from "./pages/EditListing";

import HomePage from "./pages/HomePage";
import ViewListing from "./pages/ViewListing";
import CreateListing from "./pages/CreateListing";

function App() {
  let { user_id } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path=":user_id">
          <Route path="homepage" element={<HomePage />} />
          {/* listings page URL to be confirmed */}
          <Route path="listings/1" element={<ViewListing />} />
          <Route path="createlisting" element={<CreateListing />} />
          <Route path="settings" element={<EditProfile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editlisting" element={<EditListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
