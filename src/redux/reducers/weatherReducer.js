import { GET_LOCATION, GET_FORECASTS, GET_WEATHER } from '../actions/types';

const initialState = {};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATION:
            return {
                ...state,
                currentLocation: action.payload
            }
        case GET_FORECASTS:
            return {
                ...state,
                forecasts: action.payload
            }
            case GET_WEATHER:
                return {
                    ...state,
                    wearherArray: action.payload
                }
        default:
            return state
    }
}

export default weatherReducer