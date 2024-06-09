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
// import CloseIcon from '@material-ui/icons/Close';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const KpiModal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  // Mock chart data
  const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: data.title,
        backgroundColor: '#FFD700',
        borderColor: '#000',
        borderWidth: 1,
        hoverBackgroundColor: '#FFF',
        hoverBorderColor: '#000',
        data: [65, 59, 80, 81],
      },
    ],
  };

  const pieChartData = {
    labels: ['Adherent', 'Non-Adherent'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#FFD700', '#FFF'],
        hoverBackgroundColor: ['#FFF', '#FFD700'],
      },
    ],
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ backgroundColor: '#000', color: '#FFD700' }}>
        <Typography variant="h5">{data.title}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8, color: '#FFD700' }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ backgroundColor: '#000', color: '#FFF' }}>
        <Typography variant="body1" style={{ marginBottom: '10px' }}>{data.description}</Typography>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="caption">Metric IDs: {data.metricIDs.join(', ')}</Typography>
        </div>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Calculation: {data.calculation}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Affiliate Applicability: {data.affiliateApplicability}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Last Modified Date: {data.lastModifiedDate}</Typography>
        
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Bar data={barChartData} />
        </div>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Pie data={pieChartData} />
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
      <DialogActions style={{ backgroundColor: '#000' }}>
        <Button style={{ color: '#FFD700' }} onClick={() => console.log('Favorite KPI')}>Favorite KPI</Button>
        <Button style={{ color: '#FFD700' }} onClick={() => console.log('Copy link')}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default KpiModal;
