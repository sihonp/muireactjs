import React, { useState } from 'react'
import { connect } from 'react-redux';
import useStyles from "./style";
import { getWeather } from '../../redux/actions/weatherActions'
import { Box, Container, TextField } from '@mui/material';

const SearchBar = ({ getWeather }) => {
  const classes = useStyles();
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      getWeather(location)
      setLocation('')
    }
  }

  return (
    <>
        <TextField
          value={location}
          type="text"
          onKeyPress={searchLocation}
          onChange={event => setLocation(event.target.value)}
          label="Enter City"
          margin="normal"
          variant="outlined"
        />
    </>
  )
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  getWeather: getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);