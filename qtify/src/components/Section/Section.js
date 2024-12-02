import React, { useState, useEffect } from 'react';
import { Button, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import AlbumCard from '../card/card';
import { Grid2 as Grid} from '@mui/material'
import Carousel from '../Carousel/Carousel'

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const [isCarousel, setIsCarousel] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch album data from API
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data)
        setAlbums(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
        setLoading(false);
      });
  }, [apiUrl]);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
    setIsCarousel(!isCarousel);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        
        <Typography variant="h5" color='white'>{title}</Typography>
        <Button variant="outlined" onClick={handleCollapseToggle}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      

      <div style={{ marginBottom: '16px' }}>
        {loading ? (
          // Show loading spinner while data is being fetched
          <CircularProgress />
        ) : isCollapsed ? (
          // <Carousel albums={albums.slice(0,7)} />
          <Carousel albums={albums} />
        ) : (
          <Grid container spacing={12}>
          {/* {albums.slice(0, isCollapsed ? 4 : albums.length).map((album) => ( */}
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={4} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>  
        )}
        
      </div>
    </div>
  );
};

export default Section;
