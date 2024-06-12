import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Library from './components/Library';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implementation of search logic should be done here like passing the search query to API and getting response data or other ways.
  };

  const handleRequest = () => {
    console.log('Request button clicked');
    // Implementation of request logic should be done here like sending the user inputs to an API which will grant access.
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
