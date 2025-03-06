import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, cartItemCount = 0 }) => {
  return (
    <AppBar className="header">
      <Toolbar className="header-toolbar">
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="logo"
        >
          OutdoorGear
        </Typography>

        <Box className="nav-buttons">
          {user ? (
            <Typography variant="body1" className="welcome-text">
              Welcome, {user.email}
            </Typography>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/signin"
                className="auth-button"
              >
                Sign In
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                className="auth-button outlined"
              >
                Sign Up
              </Button>
            </>
          )}
          <IconButton
            color="inherit"
            component={Link}
            to="/cart"
            className="cart-button"
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
