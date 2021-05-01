import { Layout } from 'components/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { ChatScene } from 'scenes/Chat';
import store from 'store.js';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ChatScene />
      </Layout>
    </Provider>
  );
};
