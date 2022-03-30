import React from 'react';
import { Box, Grid, Typography, CardMedia } from '@mui/material';
import { CardWrapper } from './style';
import PinDropIcon from '@mui/icons-material/PinDrop';

const WeatherCard = ({ location, status, feelsLike, temp, image }) => {
  return (
    <CardWrapper >
      <Box sx={{ p: 1 }}>
        <Grid container direction="column">
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                  {location}
                </Typography>
              </Grid>
              <Grid item>
                <CardMedia
                  component="img"
                  height="60"
                  image={image}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                  {temp}°C
                </Typography>
              </Grid>
              <Grid item>
                <PinDropIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ mb: 1.25 }}>
            <Typography
              sx={{
                // fontSize: '1rem',
                // fontWeight: 500,
                // color: theme.palette.secondary[200]
              }}
            >
              {status}<br />
              Feels like {feelsLike}°C
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CardWrapper>
  )
}

export default WeatherCard