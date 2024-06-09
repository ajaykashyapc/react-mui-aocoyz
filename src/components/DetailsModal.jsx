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
//import CloseIcon from '@material-ui/icons/Close';

const DetailsModal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5">{data.title}</Typography>
        <IconButton aria-label="close" onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ marginBottom: '10px' }}>{data.description}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Typography variant="caption">Used: {data.used}</Typography>
          <Typography variant="caption">Type: {data.type}</Typography>
          <Typography variant="caption">Pages No.: {data.pagesNo}</Typography>
          <Typography variant="caption">Last Updated: {data.lastUpdated}</Typography>
        </div>
        <div style={{ marginBottom: '20px' }}>
          {data.tags && data.tags.map((tag, index) => (
            <span key={index} style={{ marginRight: '10px', backgroundColor: '#f0f0f0', padding: '5px', borderRadius: '5px' }}>
              #{tag}
            </span>
          ))}
        </div>
        <div style={{ minHeight: '200px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
          {/* Middle portion for different content types */}
        </div>
        <Typography variant="h6">Business Questions</Typography>
        <Grid container spacing={2}>
          {data.businessQuestions.map((question, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="subtitle1">{`Question ${index + 1}`}</Typography>
              <Typography variant="body2">{question}</Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => console.log('Favorite item')}>Favorite item</Button>
        <Button color="secondary" variant="contained" onClick={() => console.log('Copy link')}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
