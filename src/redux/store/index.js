import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';


const initialState = {};

const middleware = [thunk];

const devTools = process.env.NODE_ENV === 'production' ? applyMiddleware(...middleware) : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(combinedReducers, initialState, devTools);

export default store