import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => {
  // @ts-ignore
  const user = useSelector(({ auth }) => auth.currentUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
