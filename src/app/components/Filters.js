import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment,Box } from '@mui/material';

const Filters = ({ filters, onFilterChange, onAmenityChange }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
      <TextField
        label="Location"
        variant="outlined"
        size="small"
        name="location"
        value={filters.location}
        onChange={onFilterChange}
      />
      <TextField
        label="Max Price"
        variant="outlined"
        size="small"
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={onFilterChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <FormControl>
        <InputLabel>Bedrooms</InputLabel>
        <Select
          value={filters.bedrooms}
          onChange={onFilterChange}
          label="Bedrooms"
          name="bedrooms"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Property Type</InputLabel>
        <Select
          value={filters.type}
          onChange={onFilterChange}
          label="Property Type"
          name="type"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="studio">Studio</MenuItem>
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="condo">Condo</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Amenities</InputLabel>
        <Select
          multiple
          value={filters.amenities}
          onChange={onAmenityChange}
          label="Amenities"
          name="amenities"
        >
          <MenuItem value="WiFi">WiFi</MenuItem>
          <MenuItem value="AC">AC</MenuItem>
          <MenuItem value="Parking">Parking</MenuItem>
          <MenuItem value="Gym">Gym</MenuItem>
          <MenuItem value="Swimming Pool">Swimming Pool</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select
          value={filters.available}
          onChange={onFilterChange}
          label="Availability"
          name="available"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="true">Available</MenuItem>
          <MenuItem value="false">Not Available</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
