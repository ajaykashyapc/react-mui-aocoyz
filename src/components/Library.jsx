import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  Grid,
  Link,
} from '@material-ui/core';
import SearchBar from './SearchBar';
import RequestModal from './RequestModal';
import StoryboardModal from './StoryBoardModal';
import KpiModal from './KpiModal';
import LayoutModal from './LayoutModal';
import CustomCard from './Card';
import { kpiData, layoutData, storyboardData } from './data';

const Library = ({ onRequest }) => {
  const [tabValue, setTabValue] = useState(0);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedStoryboardData, setSelectedStoryboardData] = useState(null);
  const [selectedKpiData, setSelectedKpiData] = useState(null);
  const [selectedLayoutData, setSelectedLayoutData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showAdditionalAssets, setShowAdditionalAssets] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setShowAdditionalAssets(false);
  };

  const handleRequestClick = () => {
    setIsRequestModalOpen(true);
  };

  const handleRequestClose = () => {
    setIsRequestModalOpen(false);
  };

  const handleRequestSubmit = (requestDetails) => {
    console.log('Request submitted:', requestDetails);
    onRequest(requestDetails);
  };

  const handleCardClick = (cardData) => {
    if (cardData.modal === 'kpi'){
      setSelectedKpiData(cardData);
    } else if (cardData.modal === 'layout'){
      setSelectedLayoutData(cardData);
    } else if (cardData.modal === 'storyboard'){
      setSelectedStoryboardData(cardData);
    } 
  };

  const handleCloseStoryboardModal = () => {
    setSelectedStoryboardData(null);
  };

  const handleCloseKpiModal = () => {
    setSelectedKpiData(null);
  };

  const handleCloseLayoutModal = () => {
    setSelectedLayoutData(null);
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    const allData = [ ...kpiData, ...layoutData, ...storyboardData];
    const results = allData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results.length > 0 ? results : [{ title: 'Nothing found', description: '' }]);
  };

  const handleViewMoreClick = () => {
    setShowAdditionalAssets(true);
  };

  const renderCards = (data) => (
    <Grid container spacing={3}>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <div onClick={() => handleCardClick(item)}>
            <CustomCard icon={item.icon} title={item.title} description={item.description} />
          </div>
        </Grid>
      ))}
    </Grid>
  );

  const getFeaturedData = () => {
    const featuredKpis = kpiData.slice(0, 2);
    const featuredLayouts = layoutData.slice(0, 2);
    const featuredStoryboards = storyboardData.slice(0, 2);
    return [...featuredKpis, ...featuredLayouts, ...featuredStoryboards];
  };

  const getTrendingData = () => {
    const trendingKpis = kpiData.slice(2, 4);
    const trendingLayouts = layoutData.slice(2, 4);
    const trendingStoryboards = storyboardData.slice(2, 4);
    return [...trendingKpis, ...trendingLayouts, ...trendingStoryboards];
  };

  const getAdditionalData = () => {
    const additionalKpi = kpiData.slice(4, 5);
    const additionalLayout = layoutData.slice(4, 5);
    const additionalStoryboard = storyboardData.slice(4, 5);
    return [...additionalKpi, ...additionalLayout, ...additionalStoryboard];
  };

  const getTabData = () => {
    switch (tabValue) {
      case 1:
        return kpiData;
      case 2:
        return layoutData;
      case 3:
        return storyboardData;
      default:
        return [];
    }
  };

  const getTabTitle = () => {
    switch (tabValue) {
      case 0:
        return "Featured";
      case 1:
        return "KPIs";
      case 2:
        return "Layouts";
      case 3:
        return "Storyboards";
      default:
        return "";
    }
  };

  const getSectionTagline = (section) => {
    switch (section) {
      case "Featured":
        return "Discover the most popular and recommended assets.";
      case "Trending":
        return "Check out the assets that are currently trending.";
      case "KPIs":
        return "Key Performance Indicators to track your progress.";
      case "Layouts":
        return "Explore various layouts for your presentations.";
      case "Storyboards":
        return "Storyboards to visualize and plan your projects.";
      default:
        return "";
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ boxShadow: 'none', backgroundColor: 'transparent', padding: '10px' }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleRequestClick}
            style={{ margin: '10px' }}
          >
            Request
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Library</Typography>
        <Typography variant="h6" gutterBottom>
          Browse for assets needed to report and present analysis.
        </Typography>
      </div>
      <div style={{ padding: '20px' }}>
        <SearchBar
          onSearch={handleSearch}
          searchResults={searchResults}
          onResultClick={handleCardClick}
          recentSearches={recentSearches} // Pass recent searches state to SearchBar
          setRecentSearches={setRecentSearches} // Pass setter function to update recent searches
        />
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Featured" />
          <Tab label="KPIs" />
          <Tab label="Layouts" />
          <Tab label="Storyboards" />
        </Tabs>
        <div style={{ marginTop: '20px' }}>
          {tabValue === 0 && !showAdditionalAssets && (
            <>
              <Typography variant="h5">Featured</Typography>
              <Typography variant="subtitle1">{getSectionTagline("Featured")}</Typography>
              {renderCards(getFeaturedData())}
              <Typography variant="h5" style={{ marginTop: '20px' }}>Trending</Typography>
              <Typography variant="subtitle1">{getSectionTagline("Trending")}</Typography>
              {renderCards(getTrendingData())}
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Link href="#" onClick={handleViewMoreClick}>
                  View more assets
                </Link>
              </div>
            </>
          )}
          {tabValue === 0 && showAdditionalAssets && (
            <>
              <Typography variant="h5">Additional Assets</Typography>
              {renderCards(getAdditionalData())}
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Link href="#" onClick={() => setShowAdditionalAssets(false)}>
                  Back to Featured
                </Link>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="body2">
                  Not seeing what you want? Try Search instead
                </Typography>
              </div>
            </>
          )}
          {tabValue !== 0 && (
            <>
              <Typography variant="h5">{getTabTitle()}</Typography>
              <Typography variant="subtitle1">{getSectionTagline(getTabTitle())}</Typography>
              {renderCards(getTabData())}
            </>
          )}
        </div>
      </div>
      <RequestModal
        open={isRequestModalOpen}
        onClose={handleRequestClose}
        onSubmit={handleRequestSubmit}
      />

      {selectedStoryboardData && (
        <StoryboardModal
          isOpen={!!selectedStoryboardData}
          onClose={handleCloseStoryboardModal}
          data={selectedStoryboardData}
        />
      )}
            {selectedKpiData && (
        <KpiModal
          isOpen={!!selectedKpiData}
          onClose={handleCloseKpiModal}
          data={selectedKpiData}
        />
      )}
                  {selectedLayoutData && (
        <LayoutModal
          isOpen={!!selectedLayoutData}
          onClose={handleCloseLayoutModal}
          data={selectedLayoutData}
        />
      )}
    </div>
  );
};

export default Library;
