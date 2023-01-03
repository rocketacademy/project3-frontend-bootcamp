import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    margin: '2.5em 2em 1em',
    backgroundColor: theme.colors.yellow[1],
    color: theme.colors.cyan[9],

    '&:hover': {
      boxShadow: theme.shadows.md,
      backgroundColor: theme.colors.yellow[3],
      color: theme.colors.gray[0],
    },

    '&:focus': {
      boxShadow: theme.shadows.lg,
      backgroundColor: theme.colors.yellow[5],
      color: theme.colors.gray[0],
    },
  },
}));

const ForumNavlinks = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <>
      <div className="section-nav-btn" style={{ width: 200 }}>
        <Button
          fullWidth
          variant="light"
          className={classes.button}
          onClick={() => navigate('/forum/1/1')}
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
          className={classes.button}
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
          className={classes.button}
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
          className={classes.button}
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
          className={classes.button}
          onClick={() => navigate('/forum/5/17')}
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
          className={classes.button}
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
          className={classes.button}
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
          className={classes.button}
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
          className={classes.button}
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
          className={classes.button}
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
