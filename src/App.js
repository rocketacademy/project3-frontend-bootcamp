import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import logo from "./assets//images/logo.png";
import "./App.css";
import "./assets//fonts/font.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Hello.</h2>
            <p>This is the base repo.</p>
          </header>
          {/* <Routes>

          // Navbar goes here.
            <Route element={<Home />}>

            // Homepage is all listings.
              <Route path="/listings" element={<AllListings />} />

              //Create new listing
              <Route path="/listings/new" element={<NewListingPage />} />

              //Specific listing page
              <Route
                path="/listings/:listingNumber"
                element={<ListingPage />}
              />
              <Route path="*" element={<Navigate to="/listings" />} />
            </Route>
            
            //Intro w/ sign up/ login page
            <Route path="*" element={<WelcomePage />} />
          </Routes> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
