import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Page Heading */}
      <Typography variant="h3" align="center" gutterBottom>
        About eMart
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" sx={{ mb: 4 }}>
        Your trusted online shopping destination for quality products at unbeatable prices.
      </Typography>

      {/* Company Overview */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Our Story</Typography>
              <Typography variant="body1" color="textSecondary">
                eMart was founded with a simple goal: to make online shopping easy, affordable, and accessible for everyone. 
                From electronics to fashion, we bring you a wide range of products from top brands.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Why Shop With Us?</Typography>
              <Typography variant="body1" color="textSecondary">
                ✓ Huge selection of high-quality products  
                ✓ Secure payments & fast delivery  
                ✓ 24/7 customer support  
                ✓ Best deals & discounts every day  
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Mission & Vision */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Our Mission</Typography>
              <Typography variant="body1" color="textSecondary">
                Our mission is to provide customers with the best online shopping experience by offering quality products, excellent service, and unbeatable value.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Our Vision</Typography>
              <Typography variant="body1" color="textSecondary">
                To become the most trusted e-commerce platform by delivering convenience, affordability, and top-notch service to customers worldwide.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
