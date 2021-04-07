import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';
import NotFound from './NotFound';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/app/" component={SignUp} />
    <Route exact path="/app/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRoutes;
