import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#010407ff', color: '#fff', py: 4, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              MyWebsite
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Services
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: support@mywebsite.com
              <br />
              Phone: +855 123 456 789
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
