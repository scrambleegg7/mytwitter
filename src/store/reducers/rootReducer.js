import tweetReducer from './tweetReducer';
import authReducer from './authReducers';
import userReducer from './useReducers';

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        tweets: tweetReducer,
        auth: authReducer,
        user: userReducer,
    }
);

export default rootReducer;