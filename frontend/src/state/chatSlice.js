import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { initial } from './asyncActions';

const chatAdapter = createEntityAdapter();

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initial.fulfilled, (state, { payload }) => {
      chatAdapter.upsertMany(state, payload.chats);
    });
  },
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
