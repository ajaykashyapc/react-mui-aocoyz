import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2E3B55', padding: '10px', marginTop: 'auto' }}>
      <div maxWidth="lg">
        <Typography variant="body2" style={{ color: '#FFD700', textAlign: 'center' }}>
          &copy; 2024 Bay Area Pharma. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
