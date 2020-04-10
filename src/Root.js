import React from 'react';
import { BrowserRouter as Router,    Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// Use React Loadable for routes
//import Home from './components/Home';
//import TweetPage from './components/TweetPage';
//import Login from './components/Login';

import Home from './components/Home';

import history from './utils/history';

import ScreenTest from './components/ScreenTest';

import SignIn from './user/SignIn';
import SignUp from './containers/SignUp';
import ForgetPassword from './user/ForgetPassword';
import EditUser from './user/EditUser';

const Root = () => {

    return ( 
      <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/screentest" component={ ScreenTest } />
            <Route exact path="/signin" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/forgetpass" component={ ForgetPassword } />
            <Route exact path="/edituser" component={ EditUser } />
            

          </Switch>
      </Router>
    )
  };

export default Root;
