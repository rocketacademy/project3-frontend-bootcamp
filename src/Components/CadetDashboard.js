import React from 'react';
import { useState, useEffect } from 'react';
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  Image,
  Button,
  useMantineTheme,
} from '@mantine/core';

import Profile from './Profile';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { ThemeContext } from '@emotion/react';
import DisplayMarkdown from './DisplayMarkdown';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import Rlogo from '../images/rocket-logo.png';
import { IconHome2, IconCalendarEvent } from '@tabler/icons';

import LandingPage from './LandingPage';
import MainMap from './CourseComponents/MainMap';
import Welcome from './CourseComponents/Welcome';
import Logistics from './CourseComponents/Logistics';
import GeneralRef from './CourseComponents/GeneralRef';
import Foundations from './CourseComponents/Foundations';
import Frontend from './CourseComponents/Frontend';
import FullStack from './CourseComponents/FullStack';
import Backend from './CourseComponents/Backend';
import Capstone from './CourseComponents/Capstone';
import Algorithms from './CourseComponents/Algorithms';
import InterviewPrep from './CourseComponents/InterviewPrep';
import Schedule from './Schedule';

const CadetDashboard = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Router>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        // fixed
        navbar={
          <Navbar
            padding="md"
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{ sm: 400, lg: 300 }}
          >
            <Navbar.Section>
              <div
                className="nav-logo"
                style={{
                  width: 250,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <Image src={Rlogo} alt="rocket logo" />
              </div>
            </Navbar.Section>
            <Navbar.Section grow mt="lg">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <Text component={Link} variant="link" to="/">
                  Home Page
                </Text> */}
                <Text
                  ta="center"
                  fw={500}
                  component={Link}
                  variant="link"
                  to="/main-map"
                >
                  <IconHome2 color="white" size={13} />
                  Home Page
                </Text>
                <Text
                  ta="center"
                  fw={500}
                  component={Link}
                  variant="link"
                  to="/schedule"
                >
                  {' '}
                  <IconCalendarEvent color="white" size={13} />
                  Schedule
                </Text>
                <br />
                <Text ta="left" component={Link} variant="link" to="/welcome">
                  🚀Welcome to Rocket
                </Text>

                <Text ta="left" component={Link} variant="link" to="/logistics">
                  🛠️Logistics
                </Text>
                <Text
                  ta="left"
                  component={Link}
                  variant="link"
                  to="/general-ref"
                >
                  📚General Reference
                </Text>
                <Text
                  ta="left"
                  component={Link}
                  variant="link"
                  to="/foundations"
                >
                  💎Foundations
                </Text>
                <Text ta="left" component={Link} variant="link" to="/frontend">
                  🖼️Frontend
                </Text>
                <Text
                  ta="left"
                  component={Link}
                  variant="link"
                  to="/full-stack"
                >
                  🏭Full Stack
                </Text>
                <Text ta="left" component={Link} variant="link" to="/backend">
                  🤖Backend
                </Text>
                <Text ta="left" component={Link} variant="link" to="/capstone">
                  ⛰️Capstone
                </Text>
                <Text
                  ta="left"
                  component={Link}
                  variant="link"
                  to="/algorithms"
                >
                  🧮Algorithms
                </Text>
                <Text
                  ta="left"
                  component={Link}
                  variant="link"
                  to="/interview-prep"
                >
                  💼Interview Prep
                </Text>
              </div>
            </Navbar.Section>
            <Navbar.Section>
              {/* <Text className="footer-text">Footer</Text> */}
              <LoginButton />
              <br />
              <LogoutButton />
              {/* <Button color="yellow" size="xs">
                Log Out
              </Button> */}
              <br />
              <br />
            </Navbar.Section>
          </Navbar>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/main-map" element={<MainMap />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/general-ref" element={<GeneralRef />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/full-stack" element={<FullStack />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/capstone" element={<Capstone />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
          </Route>
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </AppShell>
    </Router>
  );
};

export default CadetDashboard;
