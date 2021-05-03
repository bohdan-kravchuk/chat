import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { initial } from 'state/asyncActions';

const userAdapter = createEntityAdapter();

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initial.fulfilled, (state, { payload }) => {
      userAdapter.upsertMany(state, payload.users);
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
