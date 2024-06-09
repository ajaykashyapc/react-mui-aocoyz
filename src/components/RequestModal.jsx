import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const RequestModal = ({ open, onClose, onSubmit }) => {
  const [requestDetails, setRequestDetails] = useState({
    what: '',
    why: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRequestDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(requestDetails);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Submit a Request</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestModal;





