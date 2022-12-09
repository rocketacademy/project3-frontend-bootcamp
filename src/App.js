import React from 'react';
import logo from './logo.png';
import './App.css';
import api from './api/materials';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from '@mantine/core';
import CadetDashboard from './Components/CadetDashboard';

// import { AuthProvider } from './Components/AuthContext';

class App extends React.Component {
  render() {
    return (
      // <AuthProvider>
      <div className="App">
        <Paper>
          <CadetDashboard />
        </Paper>
      </div>
      // </AuthProvider>
    );
  }
}

export default App;
