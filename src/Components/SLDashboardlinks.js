import React from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Group,
  Text,
  Image,
  Container,
  Title,
  Paper,
  filterProps,
  List,
} from '@mantine/core';

const SLDashboardlinks = ({ cadetNames, cadetIdList, sectProgress }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/1')}
        color="yellow"
        ta="center"
      >
        Section 1
        <br />
        Welcome!
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/2')}
        color="yellow"
        ta="center"
      >
        Section 2
        <br />
        Logistics
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/3')}
        color="yellow"
        ta="center"
      >
        Section 3
        <br />
        General Reference
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/4')}
        color="yellow"
        ta="center"
      >
        Section 4
        <br />
        Foundations
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/5')}
        color="yellow"
        ta="center"
      >
        Section 5
        <br />
        Frontend
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/6')}
        color="yellow"
        ta="center"
      >
        Section 6
        <br />
        Full Stack
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/7')}
        color="yellow"
        ta="center"
      >
        Section 7
        <br />
        Backend
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/8')}
        color="yellow"
        ta="center"
      >
        Section 8
        <br />
        Capstone
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/9')}
        color="yellow"
        ta="center"
      >
        Section 9
        <br />
        Algorithms
      </Button>
      <Button
        className="SL-dashboard-sect-btn"
        onClick={() => navigate('/main-map/10')}
        color="yellow"
        ta="center"
      >
        Section 10
        <br />
        Interview Prep
      </Button>
    </div>
  );
};

export default SLDashboardlinks;
