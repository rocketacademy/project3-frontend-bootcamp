import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import ForumNavBar from "./Forum/ForumNavBar";
import BookList from "../components/Dashboard/BookList";
import CategoryList from "../components/Dashboard/CategoryList";

const Home = () => {
  return (
    <div>
      <ForumNavBar />
      <CategoryList />
      <BookList />
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Home;
