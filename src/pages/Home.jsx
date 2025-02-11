import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1E1E2F, #2A2D3E)",
        color: "#fff",
        textAlign: "center",
        px: 3,
      }}
    >
      <Container>
        {/* Motion Effects for Smooth Appearance */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "3px 3px 8px rgba(255, 255, 255, 0.2)",
              mb: 2,
            }}
          >
            Welcome to eMart!
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              maxWidth: "700px",
              mx: "auto",
              opacity: 0.9,
              mb: 3,
            }}
          >
            Discover premium gadgets, fashion, and unbeatable deals – all in one place!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              opacity: 0.8,
              fontSize: "18px",
              mb: 4,
            }}
          >
            Explore exclusive discounts, high-quality products, and fast delivery. Start shopping today!
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
