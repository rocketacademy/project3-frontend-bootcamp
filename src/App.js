import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import logo from './assets//images/logo.png';
import './App.css';
import './assets//fonts/font.css';
import { EditProfile } from './pages/EditProfile';
import WelcomePage from './pages/IntroPage';
import Profile from './pages/UserProfile';
import EditListing from './pages/EditListing';
import { Navbar } from './navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/listings" element={<WelcomePage />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/settings" element={<EditProfile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editlisting" element={<EditListing />} />
            </Routes>
            {/* <img src={logo} className="App-logo" alt="logo" />
            <h2>Hello.</h2>
            <p>This is the base repo.</p>
          </header> */}
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
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
