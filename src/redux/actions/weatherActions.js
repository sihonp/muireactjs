import axios from 'axios'
import { URL, API_KEY, GET_LOCATION, GET_FORECASTS, GET_WEATHER } from "./types";

export const getGeoposition = (latitude, longitude) => async (dispatch) => {
    try {
        const response = await axios.get(`${URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        await dispatch({ type: GET_LOCATION, payload: response.data, })
        await dispatch(getForecasts(latitude,longitude))
    } catch (error) {
        console.log(error.message)
    }
}

export const getForecasts = (latitude, longitude) => async dispatch => {
    const response = await axios.get(`${URL}onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely&appid=${API_KEY}`)
    await dispatch({ type: GET_FORECASTS, payload: response.data.daily })
}

export const getWeather = (cityName) => async dispatch => {
    const response = await axios.get(`${URL}weather?q=${cityName}&appid=${API_KEY}`)
    await dispatch(getForecasts(response.data.coord.lat, response.data.coord.lon))
    await dispatch({ type: GET_WEATHER, payload: response.data })
}

