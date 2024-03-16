import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Home;
