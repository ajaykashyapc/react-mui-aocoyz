import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Library from './components/Library';

const App = () => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implement search logic here
  };

  const handleRequest = () => {
    console.log('Request button clicked');
    // Implement request logic here
  };

  return (
    <>
      <CssBaseline />
      <Library onSearch={handleSearch} onRequest={handleRequest} />
    </>
  );
};

export default App;
