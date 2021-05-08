import { updateUser } from 'state/userSlice';
import store from '../store';

export const userHandlers = (socket) => {
  socket.on('user:update', (user) => {
    store.dispatch(updateUser(user));
  });
};
