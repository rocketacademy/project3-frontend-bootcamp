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

import Profile from "./Profile";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ThemeContext } from "@emotion/react";
import DisplayMarkdown from "./DisplayMarkdown";
import LogoutButton from "./LogoutButton";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Rlogo from "../images/rocket-logo.png";
import { IconHome2, IconCalendarEvent } from "@tabler/icons";

import LandingPage from "./LandingPage";
import MainMap from "./CourseComponents/MainMap";
import Welcome from "./CourseComponents/Welcome";
import Logistics from "./CourseComponents/Logistics";
import GeneralRef from "./CourseComponents/GeneralRef";
import Foundations from "./CourseComponents/Foundations";
import Frontend from "./CourseComponents/Frontend";
import FullStack from "./CourseComponents/FullStack";
import Backend from "./CourseComponents/Backend";
import Capstone from "./CourseComponents/Capstone";
import Algorithms from "./CourseComponents/Algorithms";
import InterviewPrep from "./CourseComponents/InterviewPrep";
import Schedule from "./Schedule";
import Loading from "./Loading";

const SLDashboard = () => {
  const [opened, setOpened] = useState(false);

  return (
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
                {" "}
                <IconCalendarEvent color="white" size={13} />
                Schedule
              </Text>
              <br />
              <Text ta="left" component={Link} variant="link" to="/sl/welcome">
                🚀PTBC4
              </Text>
            </div>
          </Navbar.Section>
          <Navbar.Section>
            <LogoutButton />
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
        </Route>
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </AppShell>
  );
};

export default withAuthenticationRequired(SLDashboard, {
  onRedirecting: () => <Loading />,
});
