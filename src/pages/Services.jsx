import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { LocalShipping, SupportAgent, Replay, CreditCard, LocalOffer, Verified } from "@mui/icons-material";

const services = [
  {
    id: 1,
    title: "Fast & Secure Delivery",
    description: "Get your orders delivered quickly and safely with our trusted shipping partners.",
    icon: <LocalShipping fontSize="large" color="primary" />,
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "We are available round the clock to assist you with any queries or concerns.",
    icon: <SupportAgent fontSize="large" color="secondary" />,
  },
  {
    id: 3,
    title: "Easy Returns & Refunds",
    description: "Hassle-free returns and quick refunds for a seamless shopping experience.",
    icon: <Replay fontSize="large" color="success" />,
  },
  {
    id: 4,
    title: "Secure Payment Methods",
    description: "Your payments are 100% safe with our encrypted payment gateways.",
    icon: <CreditCard fontSize="large" color="error" />,
  },
  {
    id: 5,
    title: "Exclusive Deals & Offers",
    description: "Enjoy amazing discounts and special deals on a wide range of products.",
    icon: <LocalOffer fontSize="large" color="warning" />,
  },
  {
    id: 6,
    title: "Quality Assurance",
    description: "We ensure that all our products meet high-quality standards before delivery.",
    icon: <Verified fontSize="large" color="info" />,
  },
];

const Services = () => {
  return (
    <Container sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
        Experience a seamless shopping journey with our top-notch services.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "scale(1.05)", boxShadow: 5 },
              }}
            >
              <Box>{service.icon}</Box>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
