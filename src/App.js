import React from "react";
import logo from "./logo.png";
import "./App.css";
import api from "./api/materials";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import CadetDashboard from "./Components/CadetDashboard";
// import { AuthProvider } from './Components/AuthContext';

class App extends React.Component {
  render() {
    return (
      // <AuthProvider>
      <Paper>
        <CadetDashboard />
      </Paper>
      // </AuthProvider>
    );
  }
}

export default App;
