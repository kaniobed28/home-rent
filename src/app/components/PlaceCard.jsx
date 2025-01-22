import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

const PlaceCard = ({ place }) => {
  // Default image if place.image is not available
  const defaultImage = '/rent-image.jpeg'; // Path to the default image in the public folder

  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        alt={place.name}
        height="200"
        image={place.image || defaultImage}  {/* If place.image is unavailable, it will use the default image */}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {place.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {place.location}
        </Typography>
        <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>
          ${place.price}/month
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => alert(`Viewing details for ${place.name}`)} // Replace with actual logic
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
