// card.js
import React from 'react';
import { Card, CardContent, Typography, Chip, CardMedia } from '@mui/material';
import styles from './card.module.css';

const card = ({ item, isSongsSection }) => {
  
  const image = item?.image || 'https://via.placeholder.com/200';  
  const title = item?.title || 'Unknown Title';  
  const likes = item?.likes || 0;  
  const follows = item?.follows || 0;  

  const likeOrFollow = isSongsSection ? likes : follows;
  
  
  return (
    <Card sx={{ maxWidth: '159px', height: '232px', gap: '6px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        alt={title}
        height="170px"
        image={image || 'https://via.placeholder.com/200'}  // Placeholder image
        sx={{ objectFit: 'cover' }}
      />
      <div className={styles.button}>
        <Chip label={`${likeOrFollow} ${isSongsSection ? 'Likes' : 'Follows'}`} size="small" color="primary" />
      </div>

      <CardContent sx={{ padding: 1, fontSize: '14px', height: '21px', display: 'flex', fontWeight: '14px', marginBottom: '8px' }}>
        <Typography variant="12px" component="div" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default card;





