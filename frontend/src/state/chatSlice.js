import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { initial } from './asyncActions';

const chatAdapter = createEntityAdapter();

const initialState = {
  ids: [],
  entities: {},
  activeId: null,
  loading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectChat(state, action) {
      state.activeId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initial.fulfilled, (state, { payload }) => {
      chatAdapter.upsertMany(state, payload.chats);
    });
  },
});

export const { selectChat } = chatSlice.actions;

export default chatSlice.reducer;
