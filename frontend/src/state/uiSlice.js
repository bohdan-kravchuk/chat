import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebarMenu: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebarMenu(state) {
      state.showSidebarMenu = !state.showSidebarMenu;
    },
  },
});

export const { toggleSidebarMenu } = uiSlice.actions;

export default uiSlice.reducer;
