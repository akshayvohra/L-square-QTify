import React, { useState, useEffect } from 'react';
import { Button, Typography, CircularProgress, Tab, Tabs } from '@mui/material';
import axios from 'axios';
import AlbumCard from '../card/card'; 
import { Grid2 as Grid } from '@mui/material';
import Carousel from '../Carousel/Carousel';

const Section = ({ title, apiUrl, isSongsSection = false }) => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState(['All', 'Rock', 'Pop', 'Jazz', 'Blues']); 
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (isSongsSection) {
      // Fetch songs based on genre
      axios.get('https://qtify-backend-labs.crio.do/songs')
        .then((response) => {
          console.log('Fetched songs:', response.data);  // Log fetched songs data
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching songs:', error);
          setLoading(false);
        });
    } else {
      // Fetch albums for non-songs section (Top Albums/New Albums)
      axios.get(apiUrl)
        .then((response) => {
          
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          
          setLoading(false);
        });
    }
  }, [apiUrl, isSongsSection]);

  const handleTabChange = (event, newValue) => {
    
    setSelectedGenre(newValue);
  };

  // Filter data based on selected genre
const filteredData = selectedGenre === 'All'
? data
: data.filter(item => {
    const genre = item?.genre; 
    if (typeof genre === 'string') {  
      const genreLower = genre.trim().toLowerCase();  
      const selectedGenreLower = selectedGenre.toLowerCase();  
      console.log(`Filtering: Checking genre "${genreLower}" against "${selectedGenreLower}"`);  
      return genreLower === selectedGenreLower;  
    } else {
      
      return false; 
    }
  });

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h5" color="white">{title}</Typography>

        {!isSongsSection && (
          <Button variant="outlined" onClick={handleCollapseToggle}>
            {isCollapsed ? 'Show All' : 'Collapse'}
          </Button>
        )}

        {isSongsSection && (
          <Tabs value={selectedGenre} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
            {genres.map((genre) => (
              <Tab key={genre} label={genre} value={genre} />
            ))}
          </Tabs>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        {loading ? (
          <CircularProgress />
        ) : isSongsSection ? (
          // Songs section, display with carousel
          <Carousel items={filteredData} isSongsSection={true} />
        ) : (
          // Non-songs section, display with carousel or grid based on collapse state
          isCollapsed ? (
            <Carousel items={data} isSongsSection={false} />
          ) : (
            <Grid container spacing={12}>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <AlbumCard item={item} isSongsSection={false} />  
                  </Grid>
                ))
              ) : (
                <Typography variant="h6" color="textSecondary">No items available for this genre</Typography>
              )}
            </Grid>
          )
        )}
      </div>
    </div>
  );
};

export default Section;













