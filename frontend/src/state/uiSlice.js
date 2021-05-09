import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebarMenu: false,
  typingIndicator: { show: false, chatId: null },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebarMenu(state) {
      state.showSidebarMenu = !state.showSidebarMenu;
    },
    showTypingIndicator(state, { payload }) {
      state.typingIndicator = { show: true, chatId: payload };
    },
    hideTypingIndicator(state) {
      state.typingIndicator = { show: false, chatId: null };
    },
  },
});

export const {
  toggleSidebarMenu,
  showTypingIndicator,
  hideTypingIndicator,
} = uiSlice.actions;

export default uiSlice.reducer;
