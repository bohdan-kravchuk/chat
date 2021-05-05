import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { initial } from './asyncActions';
import { getMessage } from './messageSlice';

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
      chatAdapter.addMany(state, payload.chats);
    });
    builder.addCase(getMessage, (state, { payload }) => {
      state.entities[payload.chatId].messages.push(payload.id);
    });
  },
});

export const { selectChat } = chatSlice.actions;

export default chatSlice.reducer;
