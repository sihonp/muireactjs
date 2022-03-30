import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress, Container, Grid } from "@mui/material";
import useStyles from "./style";
import SearchBar from '../../components/SearchBar'
import { getGeoposition, getWeather, getForecasts } from '../../redux/actions/weatherActions'
import DisplayWeather from './DisplayWeather';
import DisplayForecast from './DisplayForecast';

const Myweather = ({ weatherReducer, getGeoposition }) => {
    const classes = useStyles();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getGeoposition(position.coords.latitude, position.coords.longitude);
        })
    }, [getGeoposition])

    return (
        <Container className={classes.container}>
            <Grid container rowSpacing={2}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid  >
                        <SearchBar />
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={9} md={6} lg={4} >
                        {!weatherReducer.currentLocation ?
                            (<CircularProgress />) :
                            (!weatherReducer.wearherArray ?
                                (
                                    <DisplayWeather data={weatherReducer.currentLocation} />
                                ) : (
                                    <DisplayWeather data={weatherReducer.wearherArray} />
                                )
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <DisplayForecast data={weatherReducer.forecasts} />
                </Grid>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    weatherReducer: state.weatherReducer,
});

const mapDispatchToProps = {
    getGeoposition: getGeoposition,
    getWeather: getWeather,
    getForecasts: getForecasts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Myweather);

