"use client";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Filters from "../components/Filters";
import AvailablePlacesList from "../components/AvailablePlacesList";

const availablePlaces = [
  {
    id: 1,
    name: "Cozy 2-Bedroom Apartment",
    location: "New York, NY",
    price: 1500,
    bedrooms: 2,
    type: "Apartment",
    amenities: ["WiFi", "AC", "Parking"],
    available: true,
    image: "/rent-image.jpeg",
  },
  {
    id: 2,
    name: "Luxury Studio",
    location: "Los Angeles, CA",
    price: 1800,
    bedrooms: 1,
    type: "Studio",
    amenities: ["WiFi", "AC", "Gym"],
    available: false,
    image: "/rent-image.jpeg",
  },
  {
    id: 3,
    name: "Spacious Family Home",
    location: "San Francisco, CA",
    price: 2500,
    bedrooms: 4,
    type: "House",
    amenities: ["WiFi", "AC", "Parking", "Swimming Pool"],
    available: true,
    image: "/rent-image.jpeg",
  },
  {
    id: 4,
    name: "Modern Downtown Condo",
    location: "Chicago, IL",
    price: 2200,
    bedrooms: 3,
    type: "Condo",
    amenities: ["WiFi", "AC", "Parking", "Gym"],
    available: true,
    image: "/rent-image.jpeg",
  },
  {
    id: 5,
    name: "Charming Cottage",
    location: "Austin, TX",
    price: 1300,
    bedrooms: 2,
    type: "Cottage",
    amenities: ["WiFi", "AC", "Parking"],
    available: true,
    image: "/rent-image.jpeg",
  },
  {
    id: 6,
    name: "Urban Loft",
    location: "Seattle, WA",
    price: 2000,
    bedrooms: 1,
    type: "Loft",
    amenities: ["WiFi", "AC", "Parking", "Gym"],
    available: false,
    image: "/rent-image.jpeg",
  },
];

const AvailablePlacesPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    maxPrice: "",
    bedrooms: "",
    type: "",
    amenities: [],
    available: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleAmenityChange = (e) => {
    const { value } = e.target;
    setFilters({
      ...filters,
      amenities: value,
    });
  };

  const filteredPlaces = availablePlaces.filter((place) => {
    return (
      (filters.location === "" ||
        place.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.maxPrice === "" || place.price <= filters.maxPrice) &&
      (filters.bedrooms === "" || place.bedrooms === Number(filters.bedrooms)) &&
      (filters.type === "" || place.type.toLowerCase() === filters.type.toLowerCase()) &&
      (filters.amenities.length === 0 ||
        filters.amenities.every((amenity) => place.amenities.includes(amenity))) &&
      (filters.available === "" || place.available === (filters.available === "true"))
    );
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Available Rentals
      </Typography>

      <Grid container spacing={3}>
        {/* Filters Section */}
        <Grid
  item
  xs={12}
  md={3}
  sx={{
    position: { md: "sticky", xs: "static" }, // Sticky on medium screens and up, static on small screens
    top: { md: 16, xs: "unset" }, // Applies top spacing for sticky on larger screens
    height: { md: "fit-content", xs: "auto" }, // Adjust height based on screen size
  }}
>
  <Filters
    filters={filters}
    onFilterChange={handleFilterChange}
    onAmenityChange={handleAmenityChange}
  />
</Grid>


        {/* Available Places Section */}
        <Grid item xs={12} md={9}>
          <AvailablePlacesList filteredPlaces={filteredPlaces} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AvailablePlacesPage;
