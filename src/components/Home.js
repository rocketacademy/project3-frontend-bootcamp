import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import NavBar from "../components/Common/NavBar";
import BookList from "../components/Dashboard/BookList";
import CategoryList from "../components/Dashboard/CategoryList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CategoryList />
      <BookList />
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Home;
