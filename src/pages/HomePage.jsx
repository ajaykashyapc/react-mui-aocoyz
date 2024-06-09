import React, { useState } from 'react';
//import Library from '../components/Library';
//import AssetModal from '../components/AssetModal';
//import { sampleAssets } from '../data/sampleAssets'; // Assuming sample data
import { Grid, Typography } from '@material-ui/core';

const HomePage = () => {
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleSelectAsset = asset => setSelectedAsset(asset);
  const handleCloseModal = () => setSelectedAsset(null);

  return (
    <div>

    <Typography variant="h4">Featjnred</Typography>
    <Grid>
    <Typography variant="h4">Trending</Typography>
    </Grid>
  </div>
  );
};

export default HomePage;
