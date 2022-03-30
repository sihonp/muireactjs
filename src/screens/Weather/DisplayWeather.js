import React from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from '../../themes/constant';
import WeatherCard from '../../components/WeatherCard';

const DisplayWeather = ({ data }) => {

  return (
    <WeatherCard
      location={data.name}
      status={data.weather[0].main}
      feelsLike={Math.floor(data.main.feels_like - 273.15)}
      temp={Math.floor(data.main.temp - 273.15)}
      image={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
    />
  )
}

export default DisplayWeather

