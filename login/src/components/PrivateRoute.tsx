import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

interface MyProps {
  component: any;
  exact: boolean;
  path: string;
}

export const PrivateRoute: React.FC<MyProps> = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route render={routeProps => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={'/login'} />)} />
  );
};

export default PrivateRoute;
