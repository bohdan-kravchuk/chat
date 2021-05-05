import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { initial } from './asyncActions';

const messageAdapter = createEntityAdapter();

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    getMessage: messageAdapter.addOne,
    sendMessage: messageAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addCase(initial.fulfilled, (state, { payload }) => {
      messageAdapter.addMany(state, payload.messages);
    });
  },
});

export const { getMessage, sendMessage } = messageSlice.actions;

export default messageSlice.reducer;
