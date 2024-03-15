import React from "react";
import logo from "./logo.png";
import LoginButton from "./components/LoginButton";
import "./App.css";
import LogoutButton from "./components/LogoutButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <LoginButton />
            <LogoutButton />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
