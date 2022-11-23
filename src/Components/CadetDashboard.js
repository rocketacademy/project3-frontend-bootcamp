import React from "react";
import { useState } from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import CourseMaterials from "./CourseMaterials";
import Schedule from "./Schedule";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import DisplayMarkdown from "./DisplayMarkdown";

const CadetDashboard = () => {
  const [opened, setOpened] = useState(false);
  // const theme = useMantineTheme();

  return (
    <Router>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
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
              <Text>hello this is title</Text>
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
              <Text>Footer</Text>
              {/* Can include the logout button here */}
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70} padding="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  // color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
          <Route path="/course-materials/:modules" element={<DisplayMarkdown />} />
          <Route path="/display-markdown" element={<DisplayMarkdown />} />
          <Route
            path="/course-materials/:modules"
            element={<CourseMaterials />}
          />
          <Route path="/schedule" element={<Schedule />} />
          {/* <Route path="/calendarPage" element={<CalendarExample />} />
            <Route path="/timeInputPage" element={<TimeInputExample />} />
            <Route path="/notificationPage" element={<NotificationExample />} /> */}
        </Routes>
      </AppShell>
    </Router>
  );
};

export default CadetDashboard;
