import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

const AvailablePlacesList = ({ filteredPlaces }) => {
  return (
    <div>
      {filteredPlaces.map((place) => (
        <Card key={place.id}>
          <CardMedia
            component="img"
            alt={place.name}
            height="200"
            image={place.image}
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
              onClick={() => alert(`Viewing details for ${place.name}`)}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AvailablePlacesList;
