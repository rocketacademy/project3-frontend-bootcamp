import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Deals from "./pages/Deals";
import Delivery from "./pages/Delivery";
import FirebaseUpload from "./Components/firebaseUpload";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <FirebaseUpload />
    </div>
  );
}

export default App;
