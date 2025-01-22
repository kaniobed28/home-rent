import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const HighlightsSection = () => {
  const features = [
    { title: "Affordable Prices", desc: "Get the best deals for your budget." },
    { title: "Verified Listings", desc: "Every property is thoroughly checked." },
    { title: "24/7 Support", desc: "We are here to assist you anytime." },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box textAlign="center">
              <Typography variant="h6" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography>{feature.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HighlightsSection;
