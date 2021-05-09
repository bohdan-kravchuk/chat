import { configureStore } from '@reduxjs/toolkit';
import chatReducer from 'state/chatSlice';
import userReducer from 'state/userSlice';
import messageReducer from 'state/messageSlice';
import authReducer from 'state/authSlice';
import uiSlice from 'state/uiSlice';

export default configureStore({
  reducer: {
    chat: chatReducer,
    message: messageReducer,
    user: userReducer,
    auth: authReducer,
    ui: uiSlice,
  },
});
