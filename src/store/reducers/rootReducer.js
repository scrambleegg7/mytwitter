import sampleReducer from './sampleReducer';
import tweetReducer from './tweetReducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        sample: sampleReducer,
        tweets: tweetReducer,
    }
);

export default rootReducer;