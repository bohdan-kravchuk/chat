import { Layout } from 'components/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store.js';
import { Routing } from 'containers/Routing';
import { SocketProvider } from 'containers/SocketProvider';

export const App = () => {
  return (
    <Provider store={store}>
      <SocketProvider>
        <Router>
          <Layout>
            <Routing />
          </Layout>
        </Router>
      </SocketProvider>
    </Provider>
  );
};
