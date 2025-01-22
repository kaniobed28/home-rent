import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/rent-image.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Find Your Perfect Home Away from Home
      </Typography>
      <Typography variant="h6" gutterBottom>
        Discover the best houses for rent in your desired location.
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <TextField
          placeholder="Enter location"
          variant="outlined"
          size="small"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <TextField
          placeholder="Max price"
          variant="outlined"
          size="small"
          type="number"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Search />}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
