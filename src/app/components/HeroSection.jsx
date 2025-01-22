import React from "react";
import Link from "next/link"; // Import Link from next/link
import { Box, Button, TextField, Typography, InputAdornment } from "@mui/material";
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
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <TextField
          placeholder="Enter location"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
            "& .MuiInputAdornment-root": {
              marginRight: 1,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="Max price"
          variant="outlined"
          size="small"
          type="number"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
            "& .MuiInputAdornment-root": {
              marginRight: 1,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            width: "100%",
            textTransform: "none",
            mt: 2,
            borderRadius: 2,
          }}
        >
          Search
        </Button>

        {/* Explore Rentals Button with Link */}
        <Link href="/explore" passHref>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "100%",
              mt: 2,
              textTransform: "none",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Explore Rentals
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
