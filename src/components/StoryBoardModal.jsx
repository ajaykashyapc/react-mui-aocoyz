import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';

const filterOptions = {
  category: ['Category 1', 'Category 2', 'Category 3'],
  dateRange: ['Last 7 days', 'Last 30 days', 'Last 6 months'],
  metrics: ['Metric 1', 'Metric 2', 'Metric 3']
};

const StoryboardModal = ({ isOpen, onClose, data }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('');
  const [selectedMetric, setSelectedMetric] = useState('');

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const filteredKpis = data.kpis.filter((kpi) => {
    // Apply filtering logic here based on selectedCategory, selectedDateRange, and selectedMetric
    // This is a simplified example
    return (
      (!selectedCategory || kpi.category === selectedCategory) &&
      (!selectedDateRange || kpi.dateRange === selectedDateRange) &&
      (!selectedMetric || kpi.metrics.includes(selectedMetric))
    );
  });

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5">{data.title}</Typography>
        <IconButton aria-label="close" onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ marginBottom: '20px' }}>{data.description}</Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              select
              label="Category"
              value={selectedCategory}
              onChange={handleFilterChange(setSelectedCategory)}
              fullWidth
            >
              {filterOptions.category.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              select
              label="Date Range"
              value={selectedDateRange}
              onChange={handleFilterChange(setSelectedDateRange)}
              fullWidth
            >
              {filterOptions.dateRange.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              select
              label="Metrics"
              value={selectedMetric}
              onChange={handleFilterChange(setSelectedMetric)}
              fullWidth
            >
              {filterOptions.metrics.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">KPIs</Typography>
          <Grid container spacing={3}>
            {filteredKpis.map((kpi, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <div>
                  <Typography variant="subtitle1">{kpi.title}</Typography>
                  <Typography variant="body2">{kpi.value}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => console.log('Favorite item')}>Favorite item</Button>
        <Button color="secondary" onClick={() => console.log('Copy link')}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StoryboardModal;
