import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Library from './components/Library';
import Header from './components/Header';
import Footer from './components/Footer';

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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <div style={{ flex: 1 }}>
      <Library onSearch={handleSearch} onRequest={handleRequest} />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default App;
