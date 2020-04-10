import sampleReducer from './sampleReducer';
import tweetReducer from './tweetReducer';
<<<<<<< HEAD
import authReducer from './authreducer';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


=======
import authReducer from './authReducers';
>>>>>>> origin/mongo

import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        sample: sampleReducer,
        tweets: tweetReducer,
        auth: authReducer,
<<<<<<< HEAD
        firestore: firestoreReducer,
        firebase: firebaseReducer,
=======
>>>>>>> origin/mongo
    }
);

export default rootReducer;