import sampleReducer from './sampleReducer';
import tweetReducer from './tweetReducer';
import authReducer from './authReducers';

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {

        tweets: tweetReducer,
        auth: authReducer,
    }
);

export default rootReducer;