import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    byId: {},
    allIds: [],
  },
  chats: {
    byId: {},
    allIds: [],
  },
  messages: {
    byId: {},
    allIds: [],
  },
  loading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
