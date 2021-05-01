import { configureStore } from '@reduxjs/toolkit';
import chatReducer from 'state/chatSlice';

export default configureStore({
  reducer: {
    chat: chatReducer,
  },
});
