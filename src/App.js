import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Outlet } from "react-router-dom";
import LogoutButton from "./components/LogoutButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Outlet />
          <LogoutButton />
        </header>
      </div>
    );
  }
}

export default App;
