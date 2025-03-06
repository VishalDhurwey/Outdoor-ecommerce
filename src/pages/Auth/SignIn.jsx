import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and send to backend
    setUser({ email: formData.email, id: 1 });
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="auth-container">
        <Paper className="auth-paper">
          <Typography component="h1" className="auth-title">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className="auth-form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              className="form-field"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              className="form-field"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit-button"
            >
              Sign In
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link href="/signup" className="auth-link">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignIn;
