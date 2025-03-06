import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Box, IconButton, Badge, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoppingCart, Person, FavoriteBorder } from '@mui/icons-material';
import './Header.css';

const Header = ({ isLoggedIn, onLogout, cartItemCount = 0 }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <AppBar position="static" className="header">
      <Box className="announcement-bar">
        <Container>
          Free Shipping on Orders Over $100 | Shop Now for New Spring Collection
        </Container>
      </Box>
      
      <Container>
        <Toolbar disableGutters className="header-toolbar">
          <Link to="/" className="logo">
            OutdoorGear
          </Link>

          <Box className="header-actions">
            <IconButton color="inherit" className="action-icon" component={Link} to="/wishlist">
              <Badge badgeContent={0} color="error">
                <FavoriteBorder />
              </Badge>
            </IconButton>
            
            <IconButton color="inherit" className="action-icon" component={Link} to="/cart">
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton 
                  color="inherit" 
                  className="action-icon"
                  onClick={handleProfileClick}
                >
                  <Person />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className="profile-menu"
                >
                  <MenuItem component={Link} to="/profile" onClick={handleClose}>Profile</MenuItem>
                  <MenuItem component={Link} to="/orders" onClick={handleClose}>Orders</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button 
                component={Link} 
                to="/login"
                color="inherit"
                className="login-btn"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
