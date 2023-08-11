import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Homepage from "./Pages/Homepage";
import Categories from "./Pages/Categories";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Deals from "./Pages/Deals";
import Delivery from "./Pages/Delivery";
import Product from "./Pages/Product";
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
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
      <FirebaseUpload />
    </div>
  );
}

export default App;
