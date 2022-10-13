import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "../components/Header";
import PermanentDrawerLeft from "../components/Drawer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderBar />
          <PermanentDrawerLeft />
        </header>
        <body>
          <Outlet />
        </body>
      </div>
    );
  }
}

export default App;
