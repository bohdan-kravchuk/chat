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
  reducers: {
    updateUser: userAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder.addCase(initial.fulfilled, (state, { payload }) => {
      userAdapter.addMany(state, payload.users);
    });
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
