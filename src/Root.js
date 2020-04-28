import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ButtonAppBar from './containers/ButtonAppBar';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';


import ForgetPassword from './user/ForgetPassword';
import ResetPassword from './containers/ResetPassword';
import EditUser from './user/EditUser';

import PrivateRoute from './auth/PrivateRoute';

const Root = () => {

    return ( 
      <Router>
          <Switch>
            <Route exact path="/" component={ ButtonAppBar } />
            <Route exact path="/menu" component={ ButtonAppBar } />
            
            <Route exact path="/signin" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <PrivateRoute exact path="/user/:userId" component={ Profile } />

            <PrivateRoute exact path="/reset-password" component={ ResetPassword } />

            <Route exact path="/forgetpass" component={ ForgetPassword } />
            <Route exact path="/edituser" component={ EditUser } />
            

          </Switch>
      </Router>
    )
  };

export default Root;
