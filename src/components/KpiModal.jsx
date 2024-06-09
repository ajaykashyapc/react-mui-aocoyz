import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Grid
} from '@material-ui/core';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Prescriptions Filled',
      backgroundColor: 'gold',
      borderColor: 'black',
      borderWidth: 1,
      hoverBackgroundColor: 'white',
      hoverBorderColor: 'gold',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const pieData = {
  labels: ['Adherence', 'Non-Adherence'],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['gold', 'black'],
      hoverBackgroundColor: ['white', 'gold']
    }
  ]
};

const options = {
  plugins: {
    legend: {
      labels: {
        fontColor: 'white'
      }
    }
  },
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        fontColor: 'white'
      }
    },
    x: {
      ticks: {
        fontColor: 'white'
      }
    }
  }
};

const KpiModal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ backgroundColor: 'black', color: 'gold' }}>
        <Typography variant="h5">{data.title}</Typography>
        <IconButton aria-label="close" onClick={onClose} style={{ position: 'absolute', right: 8, top: 8, color: 'gold' }}>
          ×
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ backgroundColor: 'black', color: 'white' }}>
        <Typography variant="body1" style={{ marginBottom: '10px' }}>{data.description}</Typography>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="caption">Metric IDs: {data.metricIDs.join(', ')}</Typography>
        </div>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Calculation: {data.calculation}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Affiliate Applicability: {data.affiliateApplicability}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Last Modified Date: {data.lastModifiedDate}</Typography>
        
        <Typography variant="h6" style={{ marginTop: '20px', color: 'gold' }}>KPI Charts</Typography>
        <div style={{ marginBottom: '20px' }}>
          <Bar data={chartData} options={options} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Pie data={pieData} options={{ plugins: { legend: { labels: { fontColor: 'white' } } } }} />
        </div>
        
        <Typography variant="h6" style={{ marginTop: '20px', color: 'gold' }}>Business Questions</Typography>
        <Grid container spacing={2}>
          {data.businessQuestions.map((question, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="subtitle1" style={{ color: 'gold' }}>{`Question ${index + 1}`}</Typography>
              <Typography variant="body2">{question}</Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions style={{ backgroundColor: 'black' }}>
        <Button color="primary" variant="contained" style={{ backgroundColor: 'gold', color: 'black' }} onClick={() => console.log('Favorite KPI')}>Favorite KPI</Button>
        <Button color="secondary" variant="contained" style={{ backgroundColor: 'white', color: 'black' }} onClick={() => console.log('Copy link')}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default KpiModal;
