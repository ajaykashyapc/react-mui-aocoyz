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
      <DialogTitle style={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h5" style={{color:'#2E3B55'}}>{data.title}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          ×
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ marginBottom: '20px', color:'#2E3B55'}}>
          {data.description}
        </Typography>
        
        <Grid container spacing={3} alignItems="center">
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
        
        <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '70%', height: '70%' }}>
            {renderChart()}
          </div>
        </div>
        
        <Typography variant="h6" style={{ marginTop: '20px', color:'#2E3B55' }}>Business Questions</Typography>
        <Grid container spacing={2}>
          {data.businessQuestions.map((question, index) => (
            <Grid item xs={12} key={index}>
            <Card style={{ marginBottom: '10px', backgroundColor: '#2E3B55' }}>
              <CardContent>
                <Typography variant="body2" style={{color: '#FFD700'}}>{question}</Typography>
              </CardContent>
            </Card>
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
