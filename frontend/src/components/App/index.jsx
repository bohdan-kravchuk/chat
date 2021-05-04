import { Layout } from 'components/Layout';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store.js';
import { Routing } from 'containers/Routing';
import { connectSocketHandlers, socket } from 'socket';

export const App = () => {
  useEffect(() => {
    connectSocketHandlers();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </Provider>
  );
};
