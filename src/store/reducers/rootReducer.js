import sampleReducer from './sampleReducer';
import tweetReducer from './tweetReducer';
import authReducer from './authreducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        sample: sampleReducer,
        tweets: tweetReducer,
        auth: authReducer,
        firestore: firestoreReducer,
        firebase: firebaseReducer,
    }
);

export default rootReducer;