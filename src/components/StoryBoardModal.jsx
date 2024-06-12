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
  MenuItem,
  FormControl,
  Select, Card, CardContent,
} from '@material-ui/core';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';

// Map chart types to their corresponding components
const chartComponents = {
  bar: Bar,
  line: Line,
  pie: Pie,
  doughnut: Doughnut,
  radar: Radar,
  polarArea: PolarArea,
};

const StoryBoardModal = ({ isOpen, onClose, data }) => {
  const [selectedKpiIndex, setSelectedKpiIndex] = useState(0);

  // If there's no data or no KPIs, render nothing
  if (!data || !data.kpis || data.kpis.length === 0) return null;

  // Function for changing KPI
  const handleKpiChange = (event) => {
    setSelectedKpiIndex(event.target.value);
  };

  // Function to render the selected chart based on KPI data
  const renderChart = (chartData) => {
    const ChartComponent = chartComponents[chartData.chartType];
    if (!ChartComponent) {
      console.error(`Unsupported chart type: ${chartData.chartType}`);
      return null;
    }
    return <ChartComponent data={chartData.data} />;
  };

  // Retrieve the currently selected KPI
  const currentKpi = data.kpis[selectedKpiIndex];

  // Function to favorite the storyboard
  const handleFavoriteStory = () => {
    console.log(`Favorite Storyboard: ${data.title}`); // This is a simple placeholder that I have added. Some ideas include showing a separate section called Favorites according to user preferences.
  };

  // Function for copying the link to the storyboard
  const handleCopyLink = () => {
    const dummy = 'https://example.com/storyboard'; // This is a simple placeholder I added. Best way is to implement routing.
    console.log('Link copied:', dummy); // Log the copied link
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h5" style={{ color: '#2E3B55' }}>{data.title}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          ×
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ marginBottom: '20px', color: '#2E3B55' }}>
          {data.description}
        </Typography>

        {/* Select menu for choosing the KPI */}
        <Grid container alignItems="center">
          <Grid item>
            <FormControl variant="outlined" style={{ marginLeft: '10px', minWidth: '120px' }}>
              <Select
                id="kpi-select"
                value={selectedKpiIndex}
                onChange={handleKpiChange}
                label="KPI"
              >
                {data.kpis.map((kpi, index) => (
                  <MenuItem key={index} value={index}>{kpi.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item style={{ flexGrow: 1 }} />
          <Grid item>
            {/* Card displaying affiliate applicability */}
            <Card style={{ width: 'auto', padding: '6px', backgroundColor: '#2E3B55' }}>
              <CardContent style={{ padding: '0', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" style={{ marginRight: '15px', color: '#FFD700' }}>
                  Affiliate Applicability:
                </Typography>
                <Typography variant="body2" style={{ marginRight: '10px', color: '#FFD700' }}>
                  {data.affiliateApplicability}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Render the selected KPI's chart */}
        <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80%', height: '80%' }}>
            {currentKpi && renderChart(currentKpi.chartData)}
          </div>
        </div>
      </DialogContent>

      {/* Dialog actions: Favorite Storyboard and Copy Link */}
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleFavoriteStory}>Favorite Storyboard</Button>
        <Button color="secondary" variant="contained" onClick={handleCopyLink}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StoryBoardModal;

