import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to validate credentials
    onLogin();
    navigate('/');
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Paper elevation={3} className="login-paper">
        <Typography variant="h4" className="login-title">
          Welcome Back
        </Typography>
        <Typography className="login-subtitle">
          Sign in to continue to OutdoorGear
        </Typography>

        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            name="email"
            type="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            className="login-input"
          />
          
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            required
            value={formData.password}
            onChange={handleChange}
            className="login-input"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="login-button"
          >
            Sign In
          </Button>

          <Box className="login-links">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
            <Typography className="signup-prompt">
              Don't have an account?{' '}
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
