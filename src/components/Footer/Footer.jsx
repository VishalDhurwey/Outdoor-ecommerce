import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer">
      <Box className="features-bar">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="feature-item">
                <LocalShippingIcon />
                <Box>
                  <Typography className="feature-title">Free Shipping</Typography>
                  <Typography className="feature-text">On orders over $100</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="feature-item">
                <SupportAgentIcon />
                <Box>
                  <Typography className="feature-title">24/7 Support</Typography>
                  <Typography className="feature-text">Expert assistance</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="feature-item">
                <SecurityIcon />
                <Box>
                  <Typography className="feature-title">Secure Payments</Typography>
                  <Typography className="feature-text">100% secure checkout</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="feature-item">
                <PaymentIcon />
                <Box>
                  <Typography className="feature-title">Easy Returns</Typography>
                  <Typography className="feature-text">30-day return policy</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="main-footer">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-title">
                OutdoorGear
              </Typography>
              <Typography className="footer-description">
                Your trusted source for quality outdoor equipment and gear. We're passionate about helping you explore the great outdoors safely and comfortably.
              </Typography>
              <Box className="social-links">
                <IconButton className="social-icon">
                  <FacebookIcon />
                </IconButton>
                <IconButton className="social-icon">
                  <TwitterIcon />
                </IconButton>
                <IconButton className="social-icon">
                  <InstagramIcon />
                </IconButton>
                <IconButton className="social-icon">
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" className="footer-title">
                Shop
              </Typography>
              <Box className="footer-links">
                <Button component={Link} to="/camping">Camping</Button>
                <Button component={Link} to="/hiking">Hiking</Button>
                <Button component={Link} to="/climbing">Climbing</Button>
                <Button component={Link} to="/clothing">Clothing</Button>
                <Button component={Link} to="/deals">Deals</Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" className="footer-title">
                Support
              </Typography>
              <Box className="footer-links">
                <Button component={Link} to="/contact">Contact Us</Button>
                <Button component={Link} to="/faq">FAQs</Button>
                <Button component={Link} to="/shipping">Shipping Info</Button>
                <Button component={Link} to="/returns">Returns</Button>
                <Button component={Link} to="/size-guide">Size Guide</Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-title">
                Newsletter
              </Typography>
              <Typography className="newsletter-text">
                Subscribe to get special offers, free giveaways, and new product announcements.
              </Typography>
              <Box className="newsletter-form">
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  className="newsletter-input"
                />
                <Button className="subscribe-btn">
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="bottom-footer">
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md="auto">
              <Typography className="copyright">
                &copy; {new Date().getFullYear()} OutdoorGear. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md="auto">
              <Box className="footer-bottom-links">
                <Button component={Link} to="/privacy">Privacy Policy</Button>
                <Button component={Link} to="/terms">Terms of Service</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
