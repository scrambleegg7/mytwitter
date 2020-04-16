import tweetReducer from './tweetReducer';
import authReducer from './authReducers';
import userReducer from './userReducers';

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        user: userReducer,
        tweets: tweetReducer,
        auth: authReducer,
    }
);

export default rootReducer;