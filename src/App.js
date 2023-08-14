import React, { createContext, useEffect, useState } from "react";
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
import Payment from "./Pages/Payment";
import Auth0 from "./Pages/Auth0"; // Import your Auth0 component
import { useAuth0 } from "@auth0/auth0-react";
import Category from "./Pages/Category";
import axios from "axios";

export const UserContext = createContext({});

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [currUser, setCurrUser] = useState({});
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      const localAccess = JSON.parse(localStorage.getItem("Token"));

      if (localAccess) {
        setAccessToken(accessToken);
      } else if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUDIENCE,
            scope: process.env.REACT_APP_SCOPE,
          },
        });
        console.log("This is access token ", accessToken);
        setAccessToken(accessToken);
      }

      if (isAuthenticated && accessToken !== null) {
        //login
        const userInfo = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          user
        );
        console.log(userInfo.data.checkedUser);
        if (userInfo != null) {
          setCurrUser(userInfo.data.checkedUser);
        }
      }
    };
    checkLogin();
    console.log(user);
  }, [user, isAuthenticated]);

  useEffect(() => {
    if (accessToken !== null) {
      localStorage.setItem("Token", JSON.stringify(accessToken));
    }
  }, [accessToken]);

  console.log("curruser", currUser);
  console.log("auth user", user);

  return (
    <div>
      <UserContext.Provider value={{ currUser }}>
        <Navbar />
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:categoryId" element={<Category />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/firebaseUpload" element={<FirebaseUpload />} />
              <Route path="/payment" element={<Payment />} />
            </>
          ) : (
            <Route path="/" element={<Auth0 />} /> //unauthorized route
          )}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
