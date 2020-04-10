import tweetReducer from './tweetReducer';
import authReducer from './authReducers';

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        auth: authReducer,
        tweets: tweetReducer,
    }
);

export default rootReducer;