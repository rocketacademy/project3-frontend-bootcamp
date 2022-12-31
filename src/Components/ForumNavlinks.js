import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

const ForumNavlinks = () => {
  const navigate = useNavigate();

  // <div className="section-nav-btn" style={{ width: 200 }}>
  //   <Button fullWidth variant="light">
  //     Full width button
  //   </Button>
  // </div>;

  return (
    <>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/1')}
          color="orange"
          ta="center"
        >
          Section 1
          <br />
          Welcome!
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/2')}
          color="orange"
          ta="center"
        >
          Section 2
          <br />
          Logistics
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/3')}
          color="orange"
          ta="center"
        >
          Section 3
          <br />
          General Reference
        </Button>
      </div>

      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/4')}
          color="orange"
          ta="center"
        >
          Section 4
          <br />
          Foundations
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/5')}
          color="orange"
          ta="center"
        >
          Section 5
          <br />
          Frontend
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/6')}
          color="orange"
          ta="center"
        >
          Section 6
          <br />
          Full Stack
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/7')}
          color="orange"
          ta="center"
        >
          Section 7
          <br />
          Backend
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/8')}
          color="orange"
          ta="center"
        >
          Section 8
          <br />
          Capstone
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/9')}
          color="orange"
          ta="center"
        >
          Section 9
          <br />
          Algorithms
        </Button>
      </div>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className="SL-dashboard-sect-btn"
          onClick={() => navigate('/forum/10')}
          color="orange"
          ta="center"
        >
          Section 10
          <br />
          Interview Prep
        </Button>
      </div>
    </>
  );
};

export default ForumNavlinks;
