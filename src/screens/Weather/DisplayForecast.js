import React from 'react';
import moment from 'moment';
import { Grid, CircularProgress } from '@mui/material';
import { gridSpacing } from '../../themes/constant';
import ForecastCard from '../../components/ForecastCard';

const DisplayForecast = ({ data }) => {
  return (
    <Grid container spacing={gridSpacing} >
      {!data ? (<CircularProgress />) :
        (<>
          {data.map((item, index) => {
            return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ForecastCard
                    day={moment(item.dt * 1000).format('ddd')}
                    date={moment(item.dt * 1000).format("DD MMM YYYY")}
                    status={item.weather[0].main}
                    dayTemp={Math.floor(item.temp.day - 273.15)}
                    nightTemp={Math.floor(item.temp.night - 273.15)}
                    image={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  />
                </Grid>
            );
          })
          }
        </>)
      }
    </Grid>
  )
}

export default DisplayForecast