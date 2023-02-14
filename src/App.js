import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import logo from './assets//images/logo.png';
import "./App.css";
import "./assets//fonts/font.css";
import { EditProfile } from "./pages/EditProfile";
import WelcomePage from "./pages/IntroPage";
import Profile from "./pages/UserProfile";
import EditListing from "./pages/EditListing";

import HomePage from "./pages/HomePage";
import ListingDisplay from "./pages/ListingPage";
import CreateListingPage from "./pages/CreateListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/listings" element={<HomePage />} />
        <Route path="/listings/1" element={<ListingDisplay />} />
        <Route path="/create-listing" element={<CreateListingPage />} />
        <Route path="/settings" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editlisting" element={<EditListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
