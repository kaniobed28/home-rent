import React from "react";
import { Box, Button } from "@mui/material";
import Link from "next/link";
const CallToAction = () => {
  return (
    <Box sx={{ textAlign: "center", py: 4, backgroundColor: "primary.light" }}>
      <Link href="/explore" passHref>
      <Button variant="contained" color="secondary" size="large" sx={{ mx: 1 }}>
        Explore Rentals
      </Button>
      </Link>
      <Button variant="outlined" color="secondary" size="large" sx={{ mx: 1 }}>
        List Your Property
      </Button>
    </Box>
  );
};

export default CallToAction;
