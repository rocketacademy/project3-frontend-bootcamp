import React from 'react';
import Profile from './Profile';

import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';

// import starpic from '../images/Star-map-test-01.png';
import {
  Card,
  Text,
  Container,
  HoverCard,
  Avatar,
  Group,
  Anchor,
  Stack,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-container">
      {/* <img className="star-map" src={starpic} alt="star map"></img> */}
      <Outlet />
      <Profile />
      <TimeDisplay />
    </div>
  );
};

export default LandingPage;
