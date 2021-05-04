import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialRequest } from 'api/domains/initial';
import { setCurrentUser } from 'helpers/localStorage';

export const initial = createAsyncThunk('initial', async (userName) => {
  const response = await initialRequest(userName);
  setCurrentUser(response.currentUser.userName);
  return response;
});
