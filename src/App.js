import React, { createContext, useCallback, useEffect, useState } from "react";

import LoginPage from "./components/LoginPage";
import Listings from "./components/Listings";
import ItemListing from "./components/ItemListing";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        {/*  <Listings /> */}
        <ItemListing />
      </div>
    );
  }
}

export default App;
