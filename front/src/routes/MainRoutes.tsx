import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';
import AppRoutes from './AppRoutes';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';

const MainRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignUp} />
    <Route path="/login" component={Login} />
    <ProtectedRoute
      path="/app"
      isAuthenticated={true}
      authenticationPath="/login"
      component={AppRoutes}
    ></ProtectedRoute>
    <Route path="*" component={NotFound} />
  </Switch>
);

export default MainRoutes;
