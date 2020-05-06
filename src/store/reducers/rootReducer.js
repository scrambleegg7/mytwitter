import tweetReducer from './tweetReducers';
import authReducer from './authReducers';
import userReducer from './userReducers';

// from firebase 
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        user: userReducer,
        tweets: tweetReducer,
        auth: authReducer,
        firestore: firestoreReducer,
        firebase: firebaseReducer,
    }
);

export default rootReducer;