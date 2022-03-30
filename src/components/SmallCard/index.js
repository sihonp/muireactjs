import React from 'react';
import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';
import { CardWrapper } from './style';

const SmallCard = ({ title, image, description }) => {
  return (
    <CardWrapper >
      <Box sx={{ p: 2 }}>
        <List sx={{ py: 0.35 }}>
          <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
            <img alt='icon' src={image} height={40}  />
            <ListItemText
              sx={{
                py: 0,
                mt: 0.45,
                mb: 0.45
              }}
              primary={
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  {title}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                  {description}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </CardWrapper>
  )
}

export default SmallCard