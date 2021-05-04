import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialRequest } from 'api/domains/initial';
import { setCurrentUser } from 'helpers/localStorage';
import { socket } from 'socket';

export const initial = createAsyncThunk('initial', async (userName) => {
  const response = await initialRequest(userName);
  setCurrentUser(response.currentUser.userName);
  socket.emit('user:initial', response.currentUser.id);
  return response;
});
