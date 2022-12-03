import React from 'react';
import Profile from './Profile';
import api from '../api/materials';
import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import CourseMaterials from './CourseMaterials';
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

const LandingPage = () => {
  return (
    <div className="bg-container">
      {/* <img className="star-map" src={starpic} alt="star map"></img> */}
      <Profile />
      <TimeDisplay />
      <CourseMaterials />
    </div>
  );
};

export default LandingPage;
