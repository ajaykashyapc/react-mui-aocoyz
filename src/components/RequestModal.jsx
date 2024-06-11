import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Snackbar
} from '@material-ui/core';

const RequestModal = ({ open, onClose, onSubmit }) => {
  const [requestDetails, setRequestDetails] = useState({
    what: '',
    why: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRequestDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (requestDetails.what && requestDetails.why) {
    onSubmit(requestDetails);
    onClose();
  } else {
    setErrorMessage('Please fill out both fields to submit.');
  }
  };

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ style: { backgroundColor: '#2E3B55', color: '#FFD700' } }}>
      <Typography variant="h5" style={{ textAlign: 'center', color: '#FFD700', margin:'20px' }}>Submit a Request</Typography>
      <DialogContent>
        <Typography variant="body1" gutterBottom style={{ color: '#FFD700' }}>
          Please specify what you need and why you need it.
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="What is needed"
          name="what"
          value={requestDetails.what}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#FFD700' } }}
          InputProps={{
            style: { color: '#FFD700' },
            classes: { notchedOutline: '#fff' },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Why is it needed"
          name="why"
          value={requestDetails.why}
          onChange={handleChange}
          multiline
          rows={4}
          InputLabelProps={{ style: { color: '#FFD700' } }}
          InputProps={{
            style: { color: '#FFD700' },
            classes: { notchedOutline: 'customOutline' },
          }}
        />
      </DialogContent>
      {errorMessage && (
            <Typography variant="body2" style={{ color: 'FFD700', marginLeft: '20px' }}>
              {errorMessage}
            </Typography>
          )}
      <DialogActions>
        <Button onClick={onClose} style={{ color: '#FFD700' }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} style={{ color: '#FFD700' }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestModal;

