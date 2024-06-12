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

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
          <div style={{ display: 'flex', justifyContent: 'center',}}>
          <Paper style={{ maxHeight: 200, padding: 0, width:'60%', overflowY: 'auto' }}>
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
                  style={{ padding: 5, marginLeft: 5, color:'#666666' }}>
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
