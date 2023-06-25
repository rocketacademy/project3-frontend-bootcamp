import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import BandListingPage from "./components/BandListingPage/BandListing";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path ="/" element={<NavBar />}> */}

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/bands" element={<BandListingPage />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
