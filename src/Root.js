import React from 'react';
import { BrowserRouter as Router,    Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// Use React Loadable for routes
//import Home from './components/Home';
//import TweetPage from './components/TweetPage';
//import Login from './components/Login';

import Home from './components/Home';
import ButtonAppBar from './containers/ButtonAppBar';

import history from './utils/history';

import ScreenTest from './components/ScreenTest';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';


import ForgetPassword from './user/ForgetPassword';
import EditUser from './user/EditUser';

const Root = () => {

    return ( 
      <Router>
          <Switch>
            <Route exact path="/" component={ ButtonAppBar } />
            <Route exact path="/menu" component={ ButtonAppBar } />
            
            <Route exact path="/screentest" component={ ScreenTest } />
            <Route exact path="/signin" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/user/:userId" component={ Profile } />
            
            <Route exact path="/forgetpass" component={ ForgetPassword } />
            <Route exact path="/edituser" component={ EditUser } />
            

          </Switch>
      </Router>
    )
  };

export default Root;
