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
  const [tabValue, setTabValue] = useState(0); // Current tab index
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false); // Request modal state
  const [selectedStoryboardData, setSelectedStoryboardData] = useState(null); // Selected storyboard modal data
  const [selectedKpiData, setSelectedKpiData] = useState(null); // Selected kpi modal data
  const [selectedLayoutData, setSelectedLayoutData] = useState(null); // Selected layout modal data
  const [searchResults, setSearchResults] = useState([]); // Search results state
  const [showAdditionalAssets, setShowAdditionalAssets] = useState(false); // Flag to show additional assets
  const [recentSearches, setRecentSearches] = useState([]); // Recent search queries

  // Function for tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setShowAdditionalAssets(false);
  };

  // Function for request modal open
  const handleRequestClick = () => {
    setIsRequestModalOpen(true);
  };

   // Function for request modal close
  const handleRequestClose = () => {
    setIsRequestModalOpen(false);
  };

   // Function for handling request submission
  const handleRequestSubmit = (requestDetails) => {
    console.log('Request submitted:', requestDetails);
    onRequest(requestDetails);
  };

   // Function for handling card click
  const handleCardClick = (cardData) => {
    // Determine which modal to open based on card type
    if (cardData.modal === 'kpi') {
      setSelectedKpiData(cardData);
    } else if (cardData.modal === 'layout') {
      setSelectedLayoutData(cardData);
    } else if (cardData.modal === 'storyboard') {
      setSelectedStoryboardData(cardData);
    }
  };

  // Close storyboard modal
  const handleCloseStoryboardModal = () => {
    setSelectedStoryboardData(null);
  };

  // Close kpi modal
  const handleCloseKpiModal = () => {
    setSelectedKpiData(null);
  };

  // Close layout modal
  const handleCloseLayoutModal = () => {
    setSelectedLayoutData(null);
  };

  // Function for handling search
  const handleSearch = (query) => {
    // Combine all data for search
    const allData = [...kpiData, ...layoutData, ...storyboardData];
    // Filter data based on query
    const results = allData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));
    // Update search results
    setSearchResults(results.length > 0 ? results : [{ title: 'Nothing found', description: '' }]);
  };

  // Handle "View More" click to show additional assets
  const handleViewMoreClick = () => {
    setShowAdditionalAssets(true);
  };

  // Render cards for a given data set
  const renderCards = (data) => (
    <Grid container spacing={0}>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <div onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
            <CustomCard icon={item.modal} title={item.title} description={item.description} />
          </div>
        </Grid>
      ))}
    </Grid>
  );

  // Get featured data for the "Featured" tab
  const getFeaturedData = () => {
    const featuredKpis = kpiData.slice(0, 2);
    const featuredLayouts = layoutData.slice(0, 2);
    const featuredStoryboards = storyboardData.slice(0, 2);
    return [...featuredKpis, ...featuredLayouts, ...featuredStoryboards];
  };

  // Get trending data for the "Trending" section
  const getTrendingData = () => {
    const trendingKpis = kpiData.slice(2, 4);
    const trendingLayouts = layoutData.slice(2, 4);
    const trendingStoryboards = storyboardData.slice(2, 4);
    return [...trendingKpis, ...trendingLayouts, ...trendingStoryboards];
  };

  // Get additional data to show when "View More" is clicked
  const getAdditionalData = () => {
    const additionalKpi = kpiData.slice(4, 5);
    const additionalLayout = layoutData.slice(4, 5);
    const additionalStoryboard = storyboardData.slice(4, 5);
    return [...additionalKpi, ...additionalLayout, ...additionalStoryboard];
  };

  // Get data for the current tab
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

  // Get title for the current tab
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

  // Get tagline for a section based on tab title
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
      {/* AppBar with Request button */}
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
        {/* Library title and description */}
        <Typography variant="h4" style={{ color: '#2E3B55' }} gutterBottom>Library</Typography>
        <Typography variant="h6" style={{ color: '#2E3B55' }} gutterBottom>
          Browse for assets needed to report and present analysis.
        </Typography>
      </div>
      <div style={{ padding: '20px' }}>
        {/* Search bar component */}
        <SearchBar
          onSearch={handleSearch}
          searchResults={searchResults}
          onResultClick={handleCardClick}
          recentSearches={recentSearches} // Pass recent searches state to SearchBar
          setRecentSearches={setRecentSearches} // Pass setter function to update recent searches
        />
        {/* Tabs for different asset types */}
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
          {/* Render different content based on tab value */}
          {tabValue === 0 && !showAdditionalAssets && (
            <>
             {/* Featured section */}
              <Typography variant="h5" style={{ color: '#2E3B55' }}>Featured</Typography>
              <Typography variant="subtitle1" style={{ color: '#2E3B55' }}>{getSectionTagline("Featured")}</Typography>
              {renderCards(getFeaturedData())}
              {/* Trending section */}
              <Typography variant="h5" style={{ marginTop: '20px', color: '#2E3B55' }}>Trending</Typography>
              <Typography variant="subtitle1" style={{ color: '#2E3B55' }}>{getSectionTagline("Trending")}</Typography>
              {renderCards(getTrendingData())}
              {/* View more link */}
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Link href="#" onClick={handleViewMoreClick} style={{ color: '#2E3B55' }}>
                  View more assets
                </Link>
              </div>
            </>
          )}
          {/* Additional assets */}
          {tabValue === 0 && showAdditionalAssets && (
            <>
              <Typography variant="h5" style={{ color: '#2E3B55' }}>Additional Assets</Typography>
              {renderCards(getAdditionalData())}
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                {/* Back to featured seaction link */}
                <Link href="#" onClick={() => setShowAdditionalAssets(false)} style={{ color: '#2E3B55' }}>
                  Back to Featured
                </Link>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="body2" style={{ color: '#2E3B55' }}>
                  Not seeing what you want? Try Search instead
                </Typography>
              </div>
            </>
          )}
          {/* KPI / Layout / Storyboard cards */}
          {tabValue !== 0 && (
            <>
              <Typography variant="h5">{getTabTitle()}</Typography>
              <Typography variant="subtitle1" style={{ color: '#2E3B55' }}>{getSectionTagline(getTabTitle())}</Typography>
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
