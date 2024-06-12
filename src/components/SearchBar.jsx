import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';

const SearchBar = ({ onSearch, searchResults, onResultClick, recentSearches, setRecentSearches }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State management for search query
  const [openDropdown, setOpenDropdown] = useState(false); // State management for dropdown visibility

  // Load recent searches from localStorage when the component mounts
  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  // Handler for search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setOpenDropdown(true);
    onSearch(event.target.value); // Trigger the onSearch function passed as a prop
  };

  // Handler for search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
      const updatedSearches = [searchQuery, ...recentSearches.filter(term => term !== searchQuery)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches)); // Update localStorage
      setOpenDropdown(true);
    }
  };

  // Handler for clicking on a recent search term
  const handleRecentSearchClick = (searchTerm) => {
    setSearchQuery(searchTerm);
    onSearch(searchTerm);
    setOpenDropdown(false);

    // Find the full result object corresponding to the clicked recent search term
    const clickedResult = searchResults.find(result => result.title === searchTerm);
    console.log(clickedResult)
    if (clickedResult) {
      onResultClick(clickedResult); // Pass the entire clicked result object to onResultClick
    }

    // Update recent searches list
    const updatedSearches = [searchTerm, ...recentSearches.filter(term => term !== searchTerm)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches)); // Update localStorage
  };

   // Handler for clicking outside the search dropdown
  const handleClickAway = () => {
    setOpenDropdown(false);
  };

  // Handler for opening the search dropdown
  const handleOpenDropdown = () => {
    setOpenDropdown(true);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TextField
            style={{ width: '60%' }}
            variant="outlined"
            placeholder={"Search for assets"}
            value={searchQuery}
            onChange={handleSearchChange}
            onClick={handleOpenDropdown}

          />
        </form>
        {openDropdown && (
          <div style={{ display: 'flex', justifyContent: 'center', }}>
            <Paper style={{ maxHeight: 200, padding: 0, width: '60%', overflowY: 'auto' }}>
              {searchQuery.trim() !== '' && searchResults.length === 0 && (
                <MenuItem>Nothing found</MenuItem>
              )}
              {searchResults.length > 0 && (
                searchResults.map((result, index) => (
                  <MenuItem key={index} onClick={() => {
                    onResultClick(result);
                    handleRecentSearchClick(result.title);
                  }}
                    style={{ padding: 5, marginLeft: 5 }}>
                    {result.title}
                  </MenuItem>
                ))
              )}
              {recentSearches.length > 0 && (
                <>
                  <MenuItem style={{ borderTop: '1px solid #666666', color: 'blue', padding: 5, marginLeft: 5 }}>Recent Searches</MenuItem>
                  {recentSearches.map((term, index) => (
                    <MenuItem key={index} onClick={() => handleRecentSearchClick(term)}
                      style={{ padding: 5, marginLeft: 5, color: '#666666' }}>
                      {term}
                    </MenuItem>
                  ))}
                  <MenuItem onClick={() => {
                    setRecentSearches([]);
                    localStorage.removeItem('recentSearches');
                  }} style={{ color: 'blue', padding: 5, marginLeft: 5 }}>Clear recent searches</MenuItem>
                </>
              )}
            </Paper>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
