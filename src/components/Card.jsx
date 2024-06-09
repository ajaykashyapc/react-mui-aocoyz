import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';

const CustomCard = ({ icon, title, description }) => {
  return (
    <Card style={{ margin: '10px', maxWidth: 345 }}>
      <CardContent>
        <IconButton>
          <span role="img" aria-label="icon">{icon}</span>
        </IconButton>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
