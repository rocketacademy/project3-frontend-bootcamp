import React from 'react';
import Profile from './Profile';
import api from '../api/materials';
import { useState, useEffect } from 'react';
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
import Gitbook from './Gitbook';
import StepperModal from './StepperModal';

const LandingPage = () => {
  return (
    <div className="bg-container">
      <Gitbook />
      <Profile />
      <StepperModal />
    </div>
  );
};

export default LandingPage;
