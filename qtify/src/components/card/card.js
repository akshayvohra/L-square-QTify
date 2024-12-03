// card.js
import React from 'react';
import { Card, CardContent, Typography, Chip, CardMedia } from '@mui/material';
import styles from './card.module.css';

const card = ({ item, isSongsSection }) => {
  // const { image, title, likes, follows } = item;  // Modify depending on data
  // const likeOrFollow = isSongsSection ? likes : follows;
  // const { image = 'https://via.placeholder.com/200', title = 'Unknown Title', likes = 0, follows = 0 } = item || {};

  // // Determine whether to display likes or follows based on isSongsSection
  // const likeOrFollow = isSongsSection ? likes : follows;
  const image = item?.image || 'https://via.placeholder.com/200';  // Default image if missing
  const title = item?.title || 'Unknown Title';  // Default title if missing
  const likes = item?.likes || 0;  // Default to 0 if likes is missing
  const follows = item?.follows || 0;  // Default to 0 if follows is missing

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





// import React from 'react';
// import { Card, CardContent, Typography, Chip, CardMedia } from '@mui/material';
// import styles from './card.module.css';
// import { borderRadius, display, fontSize, maxWidth } from '@mui/system';

// const card = ({ album }) => {
//   const { image, title, followCount } = album;

//   return (
//     <Card sx={{ maxWidth: '159px', height: '232px', gap: '6px', display: 'flex', flexDirection: 'column',  overflow: 'hidden' }}>
      
      
//       <CardMedia
//         component="img"
//         alt={title}
//         height="170px"
//         borderRadius="10px"
//         image={image || 'https://via.placeholder.com/200'} // Use a placeholder image
//         sx={{ objectFit: 'cover' }}
//       />
//       <box className={styles.button}>
//       <Chip label={`${album.follows} Follows`}  size="small" color='white' /> 
//       </box>
      


//       <CardContent sx={{ padding: 1, fontSize: '14px', height: '21px', display: 'flex', fontWeight: '14px', marginBottom: '8px'  }}>
//         {/* <Chip label={`${followCount} Followers`} color="primary" size="small" />   */}
//         <Typography variant="12px" component="div" sx={{ marginBottom: 2 }}>
//           {title}
//         </Typography>
        
//       </CardContent>
//     </Card>
//   );
// };

// export default card;
