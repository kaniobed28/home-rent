import React from "react";
import { Box, Button } from "@mui/material";

const CallToAction = () => {
  return (
    <Box sx={{ textAlign: "center", py: 4, backgroundColor: "primary.light" }}>
      <Button variant="contained" color="secondary" size="large" sx={{ mx: 1 }}>
        Explore Rentals
      </Button>
      <Button variant="outlined" color="secondary" size="large" sx={{ mx: 1 }}>
        List Your Property
      </Button>
    </Box>
  );
};

export default CallToAction;
