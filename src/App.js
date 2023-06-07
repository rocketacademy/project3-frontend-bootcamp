import React, { createContext, useCallback, useEffect, useState } from "react";

import LoginPage from "./components/LoginPage";
import Listings from "./components/Listings";

import NavBar from "./components/NavBar";
import ItemListing from "./components/ItemListing";
import CreateListing from "./components/CreateListing";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <Listings />
        {/*  <ItemListing /> */}
        <Link to="/listings">Listings</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
        <Link to="/signupinfo">Sign Up Info</Link>
        {/* <CreateListing /> */}
      </div>
    );
  }
}

export default App;
