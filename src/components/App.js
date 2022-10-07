import React from "react";
import "./App.css";
import HeaderBar from "./Header";
import PermanentDrawerLeft from "./Drawer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderBar />
        </header>
        <body>
          <PermanentDrawerLeft />
        </body>
      </div>
    );
  }
}

export default App;
