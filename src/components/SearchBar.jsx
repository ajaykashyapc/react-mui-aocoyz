import React, { useState, useEffect } from 'react';
import {
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  InputAdornment,
  MenuItem,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';

const SearchBar = ({ onSearch, searchResults, onResultClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
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
      setOpenDropdown(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setOpenDropdown(false);
  };

  const handleClearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleRecentSearchClick = (searchTerm) => {
    setSearchQuery(searchTerm);
    onSearch(searchTerm);
    setOpenDropdown(false);
    // Move clicked recent search to the top of the list
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
        <form onSubmit={handleSearchSubmit} style={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onClick={handleOpenDropdown} // Open dropdown when clicking on the search bar
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClearSearch}>
                    Clear
                  </IconButton>
                  <IconButton type="submit">
                    Search
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
        {openDropdown && (
          <Paper>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <MenuItem key={index} onClick={() => {
                  onResultClick(result);
                  handleRecentSearchClick(result.title); // Include clicked search result in recent searches
                }}>
                  {result.title}
                </MenuItem>
              ))
            ) : (
              <MenuItem>Nothing found</MenuItem>
            )}
            {recentSearches.length > 0 && (
              <>
                <MenuItem style={{ borderTop: '1px solid lightgray' }}>Recent Searches</MenuItem>
                {recentSearches.map((term, index) => (
                  <MenuItem key={index} onClick={() => handleRecentSearchClick(term)}>
                    {term}
                  </MenuItem>
                ))}
                <MenuItem onClick={handleClearRecentSearches} style={{ color: 'blue' }}>Clear recent searches</MenuItem>
              </>
            )}
          </Paper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
