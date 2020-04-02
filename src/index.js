import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import { saveStore, loadStore } from './utils/storage';
// import firebase tools 
//import { reduxFirestore,   getFirestore } from 'redux-firestore';
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider,  getFirebase } from 'react-redux-firebase';
import logger from 'redux-logger';

import fbConfig from './config/fbConfig';

const myconfig = {
    userProfile: 'users', // where profiles are stored in database
    useFirestoreForProfile: true // use Firestore for profile instead of RTDB
  }

//for Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    //
    //applyMiddleware(thunk),
    composeEnhancers( applyMiddleware(thunk.withExtraArgument( getFirebase ) ) ), 
    // applyMiddleware関数でredux-loggerを設定
  );

  const rrfProps = {
    firebase: fbConfig,
    config: myconfig,
    dispatch: store.dispatch,
    createFirestoreInstance
    };

  
  
ReactDOM.render(  

    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
