import { ErrorWrapper } from 'components/ErrorWrapper';
import { LoadingWrapper } from 'components/LoadingWrapper';
import { PrivateRoute } from 'containers/PrivateRoute';
import { PublicRoute } from 'containers/PublicRoute';
import { getCurrentUser } from 'helpers/localStorage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { AuthScene } from 'scenes/Auth';
import { ChatScene } from 'scenes/Chat';
import { initial } from 'state/asyncActions';

export const Routing = () => {
  // @ts-ignore
  const user = useSelector(({ auth }) => auth.currentUser);
  // @ts-ignore
  const loading = useSelector(({ auth }) => auth.loading);
  // @ts-ignore
  const error = useSelector(({ auth }) => auth.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const userName = getCurrentUser();
      if (userName) {
        // @ts-ignore
        dispatch(initial(userName));
      }
    }
  }, [user, dispatch]);

  return (
    <LoadingWrapper loading={loading}>
      <ErrorWrapper message={error}>
        <Switch>
          <PublicRoute exact path="/auth" component={AuthScene} />
          <PrivateRoute exact path="/" component={ChatScene} />
        </Switch>
      </ErrorWrapper>
    </LoadingWrapper>
  );
};
