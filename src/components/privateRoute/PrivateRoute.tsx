import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactElement;
  path: string;
}

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <Route {...rest}>
      {user.access_token ? children : <Redirect to="/"/>}
    </Route>
  )
};

export default PrivateRoute;
