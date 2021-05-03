import { createSlice } from '@reduxjs/toolkit';
import { initial } from './asyncActions';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initial.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(initial.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentUser = payload.currentUser;
      })
      .addCase(initial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
