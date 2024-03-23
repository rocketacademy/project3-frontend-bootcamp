import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Outlet />
        Hello World
      </div>
    );
  }
}

export default App;
