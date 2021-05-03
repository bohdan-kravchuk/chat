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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initial.fulfilled, (state, { payload }) => {
      messageAdapter.upsertMany(state, payload.messages);
    });
  },
});

export const {} = messageSlice.actions;

export default messageSlice.reducer;
