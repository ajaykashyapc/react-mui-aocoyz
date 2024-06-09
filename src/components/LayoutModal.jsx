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

const LayoutModal = ({ isOpen, onClose, data }) => {
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
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Type: {data.type}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Pages No.: {data.pagesNumber}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Used No.: {data.usedNumber}</Typography>
        <Typography variant="body2" style={{ marginBottom: '10px' }}>Last Modified Date: {data.lastModifiedDate}</Typography>
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
        <Button color="primary" variant="contained" onClick={() => console.log('Favorite KPI')}>Favorite KPI</Button>
        <Button color="secondary" variant="contained" onClick={() => console.log('Copy link')}>Copy link</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LayoutModal;
