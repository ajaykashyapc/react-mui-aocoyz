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
} from '@material-ui/core';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
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
  if (!data) return null;

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

  const handleFavoriteKPI = () => {
    console.log(`Favorite KPI: ${data.title}`); // Log the favorite KPI name
  };

  const handleCopyLink = () => {
    const dummy = 'https://example.com/kpi'; // Replace with your actual link
    console.log('Link copied:', dummy); // Log the copied link
  };
  
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5">{data.title}</Typography>
        <IconButton aria-label="close" onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
          ×
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ marginBottom: '10px' }}>{data.description}</Typography>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="caption">Metric IDs: {data.metricIDs.join(', ')}</Typography>
        </div>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Calculation: {data.calculation}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Affiliate Applicability: {data.affiliateApplicability}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Last Modified Date: {data.lastModifiedDate}</Typography>
        
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          {renderChart()}
        </div>
        
        <Typography variant="h6" style={{ marginTop: '20px' }}>Business Questions</Typography>
        <Grid container spacing={2}>
          {data.businessQuestions.map((question, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="subtitle1">{`Question ${index + 1}`}</Typography>
              <Typography variant="body2">{question}</Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleFavoriteKPI}>Favorite KPI</Button>
        <Button color="secondary" variant="contained" onClick={handleCopyLink}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default KpiModal;
