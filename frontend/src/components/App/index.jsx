import { Layout } from 'components/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store.js';
import { Routing } from 'containers/Routing';

export const App = () => {
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
