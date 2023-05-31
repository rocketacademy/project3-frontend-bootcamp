//----------- React -----------//

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//---------- Pages ----------//

import Events from "./pages/Events/Events";
import Participants from "./pages/Participants/Participants";
import Facilitators from "./pages/Facilitators/Facilitators";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

//---------- Others ----------//

import "./App.css";

//------------------------------//

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/facils" element={<Facilitators />} />
      </Routes>
    </div>
  );
};

export default App;
