import React from 'react';
import { Card, CardContent, Typography, Chip, CardMedia } from '@mui/material';
import styles from './card.module.css';
import { borderRadius, display, fontSize, maxWidth } from '@mui/system';

const card = ({ album }) => {
  const { image, title, followCount } = album;

  return (
    <Card sx={{ maxWidth: '159px', height: '232px', gap: '6px', display: 'flex', flexDirection: 'column',  overflow: 'hidden' }}>
      
      
      <CardMedia
        component="img"
        alt={title}
        height="170px"
        borderRadius="10px"
        image={image || 'https://via.placeholder.com/200'} // Use a placeholder image
        sx={{ objectFit: 'cover' }}
      />
      <box className={styles.button}>
      <Chip label={`${album.follows} Follows`}  size="small" color='white' /> 
      </box>
      


      <CardContent sx={{ padding: 1, fontSize: '14px', height: '21px', display: 'flex', fontWeight: '14px', marginBottom: '8px'  }}>
        {/* <Chip label={`${followCount} Followers`} color="primary" size="small" />   */}
        <Typography variant="12px" component="div" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default card;
