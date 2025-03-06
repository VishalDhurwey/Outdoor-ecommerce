import React from 'react';
import { Box, Container, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box className="navigation">
      <Container>
        <Box className="nav-links">
          <Button
            component={Link}
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/camping"
            className={`nav-link ${isActive('/camping') ? 'active' : ''}`}
          >
            Camping
          </Button>
          <Button
            component={Link}
            to="/hiking"
            className={`nav-link ${isActive('/hiking') ? 'active' : ''}`}
          >
            Hiking
          </Button>
          <Button
            component={Link}
            to="/climbing"
            className={`nav-link ${isActive('/climbing') ? 'active' : ''}`}
          >
            Climbing
          </Button>
          <Button
            component={Link}
            to="/clothing"
            className={`nav-link ${isActive('/clothing') ? 'active' : ''}`}
          >
            Clothing
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;
