import React from "react";
import { useState, useEffect } from "react";
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
} from "@mantine/core";

import Schedule from "./Schedule";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Rlogo from "../images/rocket-logo.png";
import { ThemeContext } from "@emotion/react";
import api from "../api/materials";

import CourseMaterials from "./CourseMaterials";

import DisplayMarkdown from "./DisplayMarkdown";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

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
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Image src={Rlogo} alt="rocket logo" />
              </div>
            </Navbar.Section>
            <Navbar.Section grow mt="lg">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text component={Link} variant="link" to="/">
                  Home Page
                </Text>
                <Text component={Link} variant="link" to="/course-materials">
                  CourseMaterials
                </Text>
                <Text component={Link} variant="link" to="/display-markdown">
                  Display Markdown
                </Text>
                <Text component={Link} variant="link" to="/schedule">
                  Schedule
                </Text>
              </div>
            </Navbar.Section>
            <Navbar.Section>
              {/* <Text className="footer-text">Footer</Text> */}
              <LoginButton />
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
          <Route
            path="/course-materials/:modules"
            element={<DisplayMarkdown />}
          />
          <Route path="/display-markdown" element={<DisplayMarkdown />} />
          <Route
            path="/course-materials/:modules"
            element={<CourseMaterials />}
          />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </AppShell>
    </Router>
  );
};

export default CadetDashboard;
