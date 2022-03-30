import React from 'react';
import { Box, List, ListItem, Typography, ListItemText, CardMedia, ListItemIcon } from '@mui/material';
import { CardWrapper } from './style';

const ForecastCard = ({ nightTemp, dayTemp, date, status, day, image }) => {
  return (
    <CardWrapper >
      <Box sx={{ p: 1 }}>
        <List sx={{ py: 0.10 }}>
          <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
            <ListItemIcon >
              <CardMedia
                component="img"
                height="40"
                image={image}
              />
            </ListItemIcon>
            <ListItemText sx={{ py: 0, mt: 0.45, mb: 0.45 }}
              primary={
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  {day}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                  {date}
                </Typography>
              }
            /><ListItemText
              sx={{ py: 0, mt: 0.45, mb: 0.45 }}
              primary={
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  {status}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                  {dayTemp}°C
                </Typography>
              }
            />
          </ListItem>
          <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
            <ListItemIcon >
              <CardMedia
                component="img"
                height="40"
                image={image}
              />
            </ListItemIcon>
            <ListItemText sx={{ py: 0, mt: 0.45, mb: 0.45 }}
              primary={
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  {day}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                  {date}
                </Typography>
              }
            />
            <ListItemText
              sx={{ py: 0, mt: 0.45, mb: 0.45 }}
              primary={
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  {status}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                  {nightTemp}°C
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </CardWrapper>
  )
}

export default ForecastCard