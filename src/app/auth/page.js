"use client"; // Add this directive at the top to mark as a Client Component

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
} from '@mui/material';

export default function AuthPage() {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Function to switch to signup page
  const handleSwitchToSignup = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsLogin(false); // Switch to signup form
  };

  // Function to switch to login page (for signup page's "Login" link)
  const handleSwitchToLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: 3,
          borderRadius: 2,
          boxShadow: 1,
          backgroundColor: 'white',
        }}
      >
        {isLogin ? (
          // Login Form
          <>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              color="primary"
              sx={{ fontWeight: 900 }}
            >
              <span style={{ color: 'black', fontWeight: 900 }}>Welcome</span>{' '}
              Back
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
              We missed you! Login to continue your journey with us.
            </Typography>

            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              defaultValue="JaneDoe@gmail.com"
              InputProps={{
                startAdornment: <span>📧</span>,
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />

            <Link
              href="#"
              variant="body2"
              sx={{ display: 'block', textAlign: 'right', mb: 2, color: '#FFC107' }}
            >
              Forgot Password?
            </Link>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mb: 2 }}
            >
              Login
            </Button>

            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Or continue with
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Button
                variant="outlined"
                startIcon={<span>🇬</span>}
                sx={{ flex: 1, mr: 1 }}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<span>🇫</span>}
                sx={{ flex: 1, ml: 1 }}
              >
                Facebook
              </Button>
            </Box>

            <Typography variant="body2" align="center">
              Doesn’t have an account?{' '}
              <Link
                href="#"
                onClick={handleSwitchToSignup} // Switch to signup on click
                sx={{
                  color: '#FFC107',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#FFA000',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                    color: '#FF8F00',
                  },
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </>
        ) : (
          // Signup Form
          <>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              color="primary"
              sx={{ fontWeight: 900 }}
            >
              <span style={{ color: 'black', fontWeight: 900 }}>Create</span>{' '}
              Account
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
              Join us today! Fill in your details to get started.
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: <span>📧</span>,
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mb: 2 }}
            >
              Sign Up
            </Button>

            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Or sign up with
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Button
                variant="outlined"
                startIcon={<span>🇬</span>}
                sx={{ flex: 1, mr: 1 }}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<span>🇫</span>}
                sx={{ flex: 1, ml: 1 }}
              >
                Facebook
              </Button>
            </Box>

            <Typography variant="body2" align="center">
              Already have an account?{' '}
              <Link
                href="#"
                onClick={handleSwitchToLogin} // Switch to login on click
                sx={{
                  color: '#FFC107',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#FFA000',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                    color: '#FF8F00',
                  },
                }}
              >
                Login
              </Link>
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}