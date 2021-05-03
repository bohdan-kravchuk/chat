import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // @ts-ignore
  const user = useSelector(({ auth }) => auth.currentUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
