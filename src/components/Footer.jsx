import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        backgroundColor: "#212121", 
        color: "white", 
        py: 4, 
        mt: 0
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <Typography variant="body2">
              We offer the best quality products at the most affordable prices. 
              Your satisfaction is our priority.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Link href="#" color="inherit" underline="hover">Shop</Link><br />
            <Link href="#" color="inherit" underline="hover">About Us</Link><br />
            <Link href="#" color="inherit" underline="hover">Contact</Link><br />
            <Link href="#" color="inherit" underline="hover">FAQs</Link>
          </Grid>

          {/* Column 3: Customer Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Customer Support</Typography>
            <Typography variant="body2">📞 +1 234 567 890</Typography>
            <Typography variant="body2">📧 support@ecommerce.com</Typography>
            <Typography variant="body2">📍 123, Market Street, NY</Typography>
          </Grid>

          {/* Column 4: Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <YouTube />
            </IconButton>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Your eCommerce. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
