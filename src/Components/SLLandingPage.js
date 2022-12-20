import React from 'react';
import { Title, Paper } from '@mantine/core';
import TimeDisplay from './TimeDisplay';
import { Outlet } from 'react-router-dom';
const SLLandingPage = () => {
  return (
    <div>
      {' '}
      <Title order={1} color="yellow">
        Sl landing page
      </Title>
      <Outlet />
      <TimeDisplay />
    </div>
  );
};

export default SLLandingPage;
