import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import MyAccount from '../components/my-account/MyAccount';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute
      path="/account"
      isAuthenticated={false}
      authenticationPath="/login"
      component={MyAccount}
    />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
