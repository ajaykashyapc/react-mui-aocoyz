import React, { useState, useEffect } from 'react';
import {
  TextField,
  IconButton,
  MenuItem,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';

const SearchBar = ({ onSearch, searchResults, onResultClick, recentSearches, setRecentSearches }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.trim() === '') {
      setShowPrompt(true);
    } else {
      setShowPrompt(false);
    }
    setOpenDropdown(true);
    onSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
      const updatedSearches = [searchQuery, ...recentSearches.filter(term => term !== searchQuery)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      setOpenDropdown(true);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowPrompt(true);
    setOpenDropdown(false);
  };

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
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };
  

  const handleClickAway = () => {
    setOpenDropdown(false);
  };

  const handleOpenDropdown = () => {
    setOpenDropdown(true);
    setShowPrompt(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <form onSubmit={handleSearchSubmit} style={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={showPrompt ? "Search for assets" : "Search..."}
            value={searchQuery}
            onChange={handleSearchChange}
            onClick={handleOpenDropdown}

          />
        </form>
        {openDropdown && (
          <Paper>
            {searchQuery.trim() !== '' && searchResults.length === 0 && (
              <MenuItem>Nothing found</MenuItem>
            )}
            {searchResults.length > 0 && (
              searchResults.map((result, index) => (
                <MenuItem key={index} onClick={() => {
                  onResultClick(result);
                  handleRecentSearchClick(result.title);
                }}>
                  {result.title}
                </MenuItem>
              ))
            )}
            {recentSearches.length > 0 && (
              <>
                <MenuItem style={{ borderTop: '1px solid lightgray' }}>Recent Searches</MenuItem>
                {recentSearches.map((term, index) => (
                  <MenuItem key={index} onClick={() => handleRecentSearchClick(term)}>
                    {term}
                  </MenuItem>
                ))}
                <MenuItem onClick={() => {
                  setRecentSearches([]);
                  localStorage.removeItem('recentSearches');
                }} style={{ color: 'blue' }}>Clear recent searches</MenuItem>
              </>
            )}
          </Paper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
