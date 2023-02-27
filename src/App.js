import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import "./App.css";
import "./assets//fonts/font.css";
import { EditProfile } from "./pages/EditProfile";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";

import UserProfile from "./pages/UserProfile";
import CreateProfile from "./pages/CreateProfile";
import UserIndividualListing from "./pages/UserIndividualListing";

import CreateListing from "./pages/CreateListing";
import ViewListing from "./pages/ViewListing";
import EditListing from "./pages/EditListing";
import LoadingPage from "./pages/LoadingPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import LikedListings from "./pages/LikedListings";

function App() {
  let { user_id } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path=":original_id">
          <Route path="homepage" element={<HomePage />} />
          <Route path="search" element={<SearchResultsPage />} />

          {/* listings page URL to be confirmed */}
          <Route
            path="listings/:user_id/:listing_id"
            element={<ViewListing />}
          />
          <Route
            path="userlistings/:listing_id"
            element={<UserIndividualListing />}
          />
          <Route path="createlisting" element={<CreateListing />} />
          <Route path="settings" element={<EditProfile />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="editlisting/:listing_id" element={<EditListing />} />
          <Route path="liked" element={<LikedListings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
