import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#2E3B55', padding: '10px' }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center', color: '#FFD700' }}>
          Bay Area Pharma
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
