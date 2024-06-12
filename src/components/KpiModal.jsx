import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Grid,
  Card, CardContent,
} from '@material-ui/core';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS, // Import ChartJS components
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const KpiModal = ({ isOpen, onClose, data }) => {
  // If no data is provided, render nothing
  if (!data) return null;

  // Function to render the chart based on chart type
  const renderChart = () => {
    const { chartType, data: chartData } = data.chartData;

    if (!chartData) {
      return null;
    }

    switch (chartType) {
      case 'bar':
        return <Bar data={chartData} />;
      case 'line':
        return <Line data={chartData} />;
      case 'pie':
        return <Pie data={chartData} />;
      case 'doughnut':
        return <Doughnut data={chartData} />;
      case 'radar':
        return <Radar data={chartData} />;
      case 'polarArea':
        return <PolarArea data={chartData} />;
      case 'column':
        return <Bar data={chartData} />;
      default:
        return null;
    }
  };

  // Function to handle adding a KPI to favorites
  const handleFavoriteKPI = () => {
    console.log(`Favorite KPI: ${data.title}`); // This is a simple placeholder that I have added. Some ideas include showing a separate section called Favorites according to user preferences.
  };

  // Function to handle copying link to KPI
  const handleCopyLink = () => {
    const dummy = 'https://example.com/kpi'; // This is a simple placeholder I added. Best way is to implement routing.
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

        {/* Display various details about the KPI */}
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Metric IDs</Typography>
            <Typography variant="body2">{data.metricIDs.join(', ')}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Calculation</Typography>
            <Typography variant="body2">{data.calculation}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Affiliate Applicability</Typography>
            <Typography variant="body2">{data.affiliateApplicability}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Last Modified Date</Typography>
            <Typography variant="body2">{data.lastModifiedDate}</Typography>
          </Grid>
        </Grid>

        {/* Render the selected chart */}
        <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '70%', height: '70%' }}>
            {renderChart()}
          </div>
        </div>

        {/* Display business questions related to the KPI */}
        <Typography variant="h6" style={{ marginTop: '20px', color: '#2E3B55' }}>Business Questions</Typography>
        <Grid container spacing={0}>
          {data.businessQuestions.map((question, index) => (
            <Grid item xs={12} key={index}>
              <Card style={{ marginBottom: '10px', backgroundColor: '#2E3B55' }}>
                <CardContent>
                  <Typography variant="body2" style={{ color: '#FFD700' }}>{question}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>

      {/* Dialog actions: Favorite KPI and Copy Link */}
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleFavoriteKPI}>Favorite KPI</Button>
        <Button color="secondary" variant="contained" onClick={handleCopyLink}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default KpiModal;
