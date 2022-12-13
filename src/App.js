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
import SLDashboard from './Components/SLDashboard';
import RocketMainPage from './Components/RocketMainPage';
import PrivateRoutesCadet from './PrivateRoutesCadet';

// import { AuthProvider } from './Components/AuthContext';

class App extends React.Component {
  render() {
    return (
      // <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<RocketMainPage />} />
          <Route path="/cadet/*" element={<CadetDashboard />} />
          <Route path="/sl/*" element={<SLDashboard />} />
          <Route path="*" element={'Nothing here!'} />
        </Routes>
      </div>
      // </AuthProvider>
    );
  }
}

export default App;
